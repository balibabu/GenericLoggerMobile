import React from 'react'
import { Text, TextInput, View } from 'react-native'

export default function SelectOption(props) {
    return (
        <View className='border-2 border-sky-900 p-1 m-1'>
            <Text className='ml-1 text-sky-900'>{props.title || 'select option'}</Text>

        </View>
    )
}
