import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

export default function CustomButton(props) {
    return (
        <TouchableOpacity className={props.style} onPress={props.onclick}>
            <Text className={props.textStyle || 'text-center text-xl text-sky-900 font-semibold px-2'}>{props.title}</Text>
        </TouchableOpacity>
    )
}
