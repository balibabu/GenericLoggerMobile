import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import CustomButton from '../CustomButton'

export default function MultipleSelect(props) {

    // function selectHandler(item) {
    //     props.setFormDetail((prev) => ({ ...prev, [props.field.fieldName]: item }));
    // }

    useEffect(() => {
        if (!props.formDetail[props.field.fieldName]) {
            props.setFormDetail((prev) => ({ ...prev, [props.field.fieldName]: [] }));
        }
    }, [])


    function selectHandler(item, checked) {
        // console.log(props.formDetail[props.field.fieldName]);
        // console.log(item, checked);
        if (checked) {
            props.setFormDetail((prev) => ({ ...prev, [props.field.fieldName]: [...prev[props.field.fieldName], item] }));
        } else {
            props.setFormDetail((prev) => ({ ...prev, [props.field.fieldName]: [...prev[props.field.fieldName].filter((op) => op !== item)] }));
        }
    }

    return (
        <View className='bg-sky-100 border-2 border-sky-900 m-1 rounded-md  justify-between overflow-hidden'>
            <View className='bg-sky-200 p-2 border-b-2 border-sky-900'>
                <Text className='text-xl font-bold text-sky-900'>{props.field.fieldName}</Text>
            </View>
            <View className='flex-row flex-wrap m-1'>
                {props.field.options.map((op, i) => (
                    <Chip key={i} {...{ title: op, selected: props.formDetail[props.field.fieldName], onclick: selectHandler }} />
                ))}
            </View>
        </View>

    )
}


function Chip(props) {
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        if (props.selected && props.selected.includes(props.title)) {
            setChecked(true);
        }
    }, [props.selected])


    function checkHandler() {
        props.onclick(props.title, !checked);
        setChecked(!checked);
    }

    let ui = 'flex-row bg-green-200 p-1 rounded-full m-1 border-2 border-green-900'
    if (!checked) {
        ui = 'flex-row bg-sky-300 p-1 rounded-full m-1 border-2 border-sky-900'
    }
    return (
        <View className={ui}>
            <CustomButton {...{ title: props.title, textStyle: checked?'text-green-900 text-center text-xl font-semibold px-2':'', onclick: checkHandler }} />
        </View>
    );
}