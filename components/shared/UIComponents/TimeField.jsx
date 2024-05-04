import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import DatePicker from 'react-native-date-picker'
import CustomButton from '../CustomButton'

export default function TimeField(props) {
    const [time, setTime] = useState(new Date());
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (props.formDetail[props.field.fieldName]) {
            setTime(getDateObject(props.formDetail[props.field.fieldName]));
        }
    }, []);

    function onTimeChange(date) {
        setOpen(false)
        setTime(date);
        props.setFormDetail((prev) => ({ ...prev, [props.field.fieldName]: getTimeString(date) }));
    }

    return (
        <View className='bg-sky-100 border-2 border-sky-900 m-1 rounded-md flex-row  justify-between overflow-hidden'>
            <CustomButton {...{ title: props.field.fieldName, style: 'bg-sky-200 h-fit px-2 grow border-r-2 border-sky-900 py-2', onclick: () => setOpen(true) }} />
            <CustomButton {...{
                title: getTimeString(time),
                style: 'mt-1',
                textStyle: 'text-lg text-sky-900 px-2',
                onclick: () => setOpen(true)
            }} />

            <DatePicker
                modal
                mode='time'
                open={open}
                date={time}
                onConfirm={(date) => {
                    onTimeChange(date)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
        </View>
    )
}

function getTimeString(_date) {
    const date = new Date(_date)
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const formattedTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    return formattedTime;
}

function getDateObject(timeString) {
    const currentDate = new Date();
    const [hours, minutes, seconds] = timeString.split(':').map(Number);

    currentDate.setHours(hours);
    currentDate.setMinutes(minutes);
    currentDate.setSeconds(seconds);

    return currentDate;
}