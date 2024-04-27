import React, { useContext, useEffect, useState } from 'react'
import { Image, Text, TextInput, View } from 'react-native'
import LoggerContext from '../Contexts/LoggerContext';
import Logger from './Logger';
import CustomButton from '../shared/CustomButton';

export default function Loggers({ navigation }) {
    const { loggers } = useContext(LoggerContext);
    const [filteredLoggers, setFilteredLoggers] = useState([]);
    const [searchKey, setSearchKey] = useState('');

    useEffect(() => {
        setFilteredLoggers(loggers);
    }, [loggers])
    

    function searchKeyChange(text) {
        setSearchKey(text);
        setFilteredLoggers(loggers.filter((logger) => logger.title.toLowerCase().includes(text.toLowerCase())));
    }

    return (
        <View>
            <View className='flex-row bg-sky-200'>
                <Image source={require('../shared/search.png')} className='w-10 h-full' />
                <TextInput placeholder="search" className='text-lg text-sky-900' value={searchKey} onChangeText={searchKeyChange} />
            </View>
            <View className='flex-row flex-wrap columns-3'>
                <CustomButton {...{ title: 'Create Logger', style: 'h-28 w-28 bg-sky-500 m-1', textStyle: 'text-sky-100 text-xl font-bold text-center', onclick: () => navigation.navigate('Editor') }} />
                {filteredLoggers && filteredLoggers.map((logger) => <Logger key={logger.id} {...{ logger, navigation }} />)}
            </View>
        </View>
    );
}