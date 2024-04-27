import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import PopUpMenu from '../shared/PopUpMenu'
import LoggerContext from '../Contexts/LoggerContext';

export default function Logger(props) {
    const { deleteLogger } = useContext(LoggerContext);

    const menus = [
        { title: 'modify', click: () => props.navigation.navigate('Editor', { id: props.logger.id }) },
        { title: 'delete', click: () => deleteLogger(props.logger.id) }
    ];
    return (
        <TouchableOpacity className='h-28 w-28 bg-sky-300 m-1 p-1'
            onPress={() => props.navigation.navigate('Logs', { id: props.logger.id })}>
            <PopUpMenu {...{ triggerText: '::', menus }} />
            <Text className='font-semibold text-center'>{props.logger.title}</Text>
        </TouchableOpacity>
    )
}
