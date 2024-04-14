import React, { useContext } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import LoggerContext from '../Contexts/LoggerContext';
import Logger from './Logger';
import CustomButton from '../shared/CustomButton';

export default function Loggers({ navigation }) {
    const { loggers } = useContext(LoggerContext);

    return (
        <View>
            <View className='flex-row bg-sky-200'>
                <Image source={require('../shared/search.png')} className='w-10 h-full' />
                <TextInput placeholder="search" className='text-lg text-sky-900' />
            </View>
            <View className='flex-row flex-wrap'>
                <CustomButton {...{ title: 'Create Logger', style: 'h-20 w-20 bg-sky-500 m-1',textStyle:'text-sky-100 text-xl font-bold text-center', onclick: () => navigation.navigate('Editor') }} />
                {/* <TouchableOpacity onPress={() => navigation.navigate('Editor')} className='h-20 w-20 bg-sky-500 m-1'><Text className='text-sky-100 text-xl font-bold text-center'>Create logger</Text></TouchableOpacity> */}
                {loggers.map((logger) => <Logger key={logger.id} {...{ logger, navigation }} />)}
            </View>
        </View>
    );
}