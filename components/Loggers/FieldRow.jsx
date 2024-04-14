import React from 'react'
import { Text, View } from 'react-native'
import PopUpMenu from './PopUpMenu'

export default function FieldRow({ navigation, item, index }) {
    return (
        <View className='flex-row justify-between py-2'>
            <View className='flex-row justify-between w-1/2 pr-3'>
                <Text className='px-2 font-black text-sky-900 text-md'>=</Text>
                <Text className='font-bold text-sky-900 text-md'>{item.fieldName}</Text>
            </View>
            <View className='flex-row justify-between w-1/2 pl-3'>
                <Text className='font-bold text-sky-900 text-md'>{item.fieldType}</Text>
                <PopUpMenu {...{ triggerText: '::', navigation, index }} />
                {/* <Text className='px-2 font-black text-sky-900 text-md'>:</Text> */}
            </View>
        </View>
    )
}
