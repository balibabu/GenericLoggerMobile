import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import CustomButton from '../shared/CustomButton'
import PopUpMenu from '../shared/PopUpMenu'
import LoggerContext from '../Contexts/LoggerContext';
import LogContext from '../Contexts/LogContext';

export default function Log(props) {
    const { setLoggers } = useContext(LoggerContext);
    const { deleteLog } = useContext(LogContext);

    const menus = [
        { title: 'modify', click: () => props.navigation.navigate('LogEditor', { loggerId: props.loggerId, logId: props.log.id }) },
        { title: 'delete', click: () => deleteLog(props.loggerId, props.log.id) }
    ];
    return (
        <TouchableOpacity className='h-20 w-20 bg-sky-300 m-1 p-1'
            onPress={() => props.navigation.navigate('LogEditor', { loggerId: props.loggerId, logId: props.log.id })}
        >
            {/* <CustomButton {...{ title: '::', textStyle: 'font-bold text-sky-950 px-1 text-right', onclick: () => console.log('hi') }} /> */}
            <PopUpMenu {...{ triggerText: '::', menus }} />
            <Text className='font-semibold text-center'>{props.log.id}</Text>
        </TouchableOpacity>
    )
}
