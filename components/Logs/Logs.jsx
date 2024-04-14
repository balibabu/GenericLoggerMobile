import React, { useContext } from 'react'
import { Image, Text, TextInput, View } from 'react-native'
import LoggerContext from '../Contexts/LoggerContext';
import CustomButton from '../shared/CustomButton';

export default function Logs(props) {
    const { loggers } = useContext(LoggerContext);
    const foundLogger = loggers.find((logger) => logger.id === props.route.params.id);

    return (
        <View>
            <View className='flex-row bg-sky-200'>
                <Image source={require('../shared/search.png')} className='w-10 h-full' />
                <TextInput placeholder="search" className='text-lg text-sky-900' />
            </View>
            <View className='flex-row flex-wrap'>
                <CustomButton {...{ title: 'Add Log', style: 'h-20 w-20 bg-sky-500 m-1', textStyle: 'text-sky-100 text-xl font-bold text-center', onclick: () => props.navigation.navigate('LogEditor', { id: props.route.params.id }) }} />
                <Text>Logs</Text>
            </View>
        </View>
    )
}
