import React from 'react'
import { Text, TextInput, View } from 'react-native'

export default function KeyValueField(props) {

    return (
        <View className='bg-sky-100 border-2 border-sky-900 m-1 rounded-md  justify-between overflow-hidden'>
            <View className='bg-sky-200 p-2 border-b-2 border-sky-900'>
                <Text className='text-xl font-bold text-sky-900'>{props.field.fieldName}</Text>
            </View>
            <View className=''>
                <TextInput className='text-sky-900 p-1'
                    placeholder={`{\n\tkey:value,\n\tkey:value\n}`}
                    multiline
                    value={props.formDetail[props.field.fieldName] || ''}
                    onChangeText={(text) => props.setFormDetail((prev) => ({ ...prev, [props.field.fieldName]: text }))}
                />
            </View>
        </View>

    )
}

