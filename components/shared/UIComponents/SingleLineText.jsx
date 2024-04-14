import React from 'react'
import { Text, TextInput, View } from 'react-native'

export default function SingleLineText(props) {

    return (
        <View className='border-2 border-sky-900 p-1 m-1'>
            <Text className='ml-1 text-sky-900'>{props.field.fieldName || 'Single Line Text Input'}</Text>
            <TextInput className='text-lg text-sky-900 font-bold p-1'
                value={props.formDetail[props.field.fieldName] || ''}
                onChangeText={(text) => props.setFormDetail((prev) => ({ ...prev, [props.field.fieldName]: text }))}
            />
        </View>
    )
}
