import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import DatePicker from 'react-native-date-picker'
import CustomButton from '../CustomButton'

export default function DateTimeField(props) {
    const [datetime, setDatetime] = useState(new Date());
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (props.formDetail[props.field.fieldName]) {
            setDatetime(parseStringToDate(props.formDetail[props.field.fieldName]));
        }
    }, []);

    function onDateTimeChange(date) {
        setOpen(false)
        setDatetime(date);
        props.setFormDetail((prev) => ({ ...prev, [props.field.fieldName]: formatDateToString(date) }));
    }

    return (
        <View className='bg-sky-100 border-2 border-sky-900 m-1 rounded-md flex-row  justify-between overflow-hidden'>
            <CustomButton {...{ title: props.field.fieldName, style: 'bg-sky-200 h-fit px-2 grow border-r-2 border-sky-900 py-2', onclick: () => setOpen(true) }} />
            <CustomButton {...{
                title: formatDateToString(datetime),
                style: 'mt-1',
                textStyle: 'text-lg text-sky-900 px-2',
                onclick: () => setOpen(true)
            }} />
            <DatePicker
                modal
                mode='datetime'
                open={open}
                date={datetime}
                onConfirm={(date) => {
                    onDateTimeChange(date)
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
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

function parseStringToDate(dateString) {
    const [datePart, timePart] = dateString.split(' ');
    const [year, month, day] = datePart.split('-').map(Number);
    const [hours, minutes, seconds] = timePart.split(':').map(Number);
    return new Date(year, month - 1, day, hours, minutes, seconds);
}