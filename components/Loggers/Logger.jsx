import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import CustomButton from '../shared/CustomButton'
import PopUpMenu from '../shared/PopUpMenu'
import LoggerContext from '../Contexts/LoggerContext';

export default function Logger(props) {
    const { setLoggers } = useContext(LoggerContext);

    const menus = [
        { title: 'modify', click: () => props.navigation.navigate('Editor', { id: props.logger.id }) },
        { title: 'delete', click: () => setLoggers((prev) => [...prev.filter((logger) => logger.id !== props.logger.id)]) }
    ];
    return (
        <TouchableOpacity className='h-20 w-20 bg-sky-300 m-1 p-1'
            onPress={() => props.navigation.navigate('Logs', { id: props.logger.id })}
        >
            {/* <CustomButton {...{ title: '::', textStyle: 'font-bold text-sky-950 px-1 text-right', onclick: () => console.log('hi') }} /> */}
            <PopUpMenu {...{ triggerText: '::', menus }} />
            <Text className='font-semibold text-center'>{props.logger.title}</Text>
        </TouchableOpacity>
    )
}
