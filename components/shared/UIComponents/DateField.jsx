import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import DatePicker from 'react-native-date-picker'
import CustomButton from '../CustomButton'

export default function DateField(props) {
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (props.formDetail[props.field.fieldName]) {
            setDate(parseStringToDate(props.formDetail[props.field.fieldName]));
        }
    }, []);

    function onDateChange(date) {
        setOpen(false)
        setDate(date);
        props.setFormDetail((prev) => ({ ...prev, [props.field.fieldName]: formatDateToString(date) }));
    }

    return (
        <View className='bg-sky-100 border-2 border-sky-900 m-1 rounded-md flex-row  justify-between overflow-hidden'>
            <CustomButton {...{ title: props.field.fieldName, style: 'bg-sky-200 h-fit px-2 grow border-r-2 border-sky-900 py-2', onclick: () => setOpen(true) }} />
            <CustomButton {...{
                title: formatDateToString(date),
                style: 'mt-1',
                textStyle: 'text-lg text-sky-900 px-2',
                onclick: () => setOpen(true)
            }} />

            <DatePicker
                modal
                mode='date'
                open={open}
                date={date}
                onConfirm={(date) => {
                    onDateChange(date)
                    setDate(date)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
        </View>
    )
}


function formatDateToString(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function parseStringToDate(dateString) {
    const [year, month, day] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day);
}