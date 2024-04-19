import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import CustomButton from '../CustomButton'

export default function RadioButton(props) {

    function selectHandler(item) {
        props.setFormDetail((prev) => ({ ...prev, [props.field.fieldName]: item }));
    }

    return (
        <View className='bg-sky-100 border-2 border-sky-900 m-1 rounded-md  justify-between overflow-hidden'>
            <View className='bg-sky-200 p-2 border-b-2 border-sky-900'>
                <Text className='text-xl font-bold text-sky-900'>{props.field.fieldName}</Text>
            </View>
            <View className='flex-row flex-wrap m-1'>
                {props.field.options.map((op, i) => (
                    <RadioItem key={i} {...{ title: op, checked: op === props.formDetail[props.field.fieldName], onclick: () => selectHandler(op) }} />
                ))}
            </View>
        </View>

    )
}


function RadioItem(props) {
    let checked = 'w-7 h-7 bg-blue-600 rounded-full mr-2 border-4 border-sky-100'
    if (!props.checked) {
        checked = 'w-7 h-7 bg-sky-100 rounded-full mr-2 border-2 border-sky-900'
    }
    return (
        <View className='flex-row bg-sky-300 p-2 rounded-full m-1 border-2 border-sky-900'>
            <CustomButton {...{ style: checked, onclick: props.onclick }} />
            <Text className='text-xl font-bold text-sky-900'>{props.title}</Text>
        </View>
    );
}