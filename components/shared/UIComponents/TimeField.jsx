import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import DatePicker from 'react-native-date-picker'
import CustomButton from '../CustomButton'

export default function TimeField(props) {
    const [date, setDate] = useState(props.formDetail[props.field.fieldName] || new Date());
    const [open, setOpen] = useState(false)

    useEffect(() => {
        props.setFormDetail((prev) => ({ ...prev, [props.field.fieldName]: date }));
    }, [date])

    return (
        <View className='bg-sky-100 border-2 border-sky-900 m-1 rounded-md flex-row  justify-between overflow-hidden'>
            <CustomButton {...{ title: props.field.fieldName, style: 'bg-sky-200 h-fit px-2 grow border-r-2 border-sky-900 py-2', onclick: () => setOpen(true) }} />
            <CustomButton {...{
                title: date.toTimeString(),
                style: 'mt-1',
                textStyle: 'text-lg text-sky-900 px-2',
                onclick: () => setOpen(true)
            }} />
            <DatePicker
                modal
                mode='time'
                open={open}
                date={date}
                onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
        </View>
    )
}
