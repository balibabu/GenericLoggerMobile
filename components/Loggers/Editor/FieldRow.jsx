import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import LoggerContext from '../../Contexts/LoggerContext';
import PopUpMenu from '../../shared/PopUpMenu';

export default function FieldRow({ navigation, item, index }) {
    const { deleteField } = useContext(LoggerContext);

    const menus = [
        { title: 'modify', click: () => navigation.navigate('AddField', { index }) },
        { title: 'delete', click: () => deleteField(index) }
    ];
    return (
        <View className='flex-row justify-between py-2'>
            <View className='flex-row justify-between w-1/2 pr-3'>
                <Text className='px-2 font-black text-sky-900 text-md'>=</Text>
                <Text className='font-bold text-sky-900 text-md'>{item.fieldName}</Text>
            </View>
            <View className='flex-row justify-between w-1/2 pl-3'>
                <Text className='font-bold text-sky-900 text-md'>{item.fieldType}</Text>
                <PopUpMenu {...{ triggerText: '::', menus }} />
            </View>
        </View>
    )
}
