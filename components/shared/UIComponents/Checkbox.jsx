import React, { useState } from 'react'
import { CheckBox, Text, View } from 'react-native'
import CustomButton from '../CustomButton'

export default function Checkbox(props) {
    const [checked, setChecked] = useState(false);

    return (
        <View className='bg-sky-100 border-2 border-sky-900 m-1 rounded-md flex-row  justify-between'>
            
            {/* <View className='bg-sky-200 h-fit px-2 grow border-r-2 border-sky-900 py-2'>
                <Text className='text-xl font-bold text-sky-900'>{props.title || 'checkbox'}</Text>
            </View>
            <CustomButton {...{ title: '', style: `h-fit w-7 mx-2 border-2 border-sky-900 rounded-md my-2 ${checked ? 'bg-blue-500' : 'bg-blue-100'}`, onclick: () => setChecked(!checked) }} /> */}
            {/* <View className='h-fit w-7 bg-sky-100 mx-2 border-2 border-sky-900 rounded-md my-2'></View> */}
        </View>
    )
}
