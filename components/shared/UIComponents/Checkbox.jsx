import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import CustomButton from '../CustomButton'

export default function Checkbox(props) {
    useEffect(() => {
        const checked = props.formDetail[props.field.fieldName] || false;
        props.setFormDetail((prev) => ({ ...prev, [props.field.fieldName]: checked }));
    }, [])

    return (
        <View className='bg-sky-100 border-2 border-sky-900 m-1 rounded-md flex-row  justify-between overflow-hidden'>
            <View className='bg-sky-200 h-fit px-2 grow border-r-2 border-sky-900 py-2'>
                <Text className='text-xl font-bold text-sky-900'>{props.field.fieldName}</Text>
            </View>
            <View className='border-2 border-sky-900 w-7 h-7 mx-2 my-2 overflow-hidden rounded-lg'>
                <CustomButton {...{
                    title: '',
                    style: `rounded-lg ${props.formDetail[props.field.fieldName] ? 'bg-blue-700 border-2 border-sky-100' : 'bg-blue-100'}`,
                    onclick: () => props.setFormDetail((prev) => ({ ...prev, [props.field.fieldName]: !props.formDetail[props.field.fieldName] }))
                }} />
            </View>
        </View>
    )
}
