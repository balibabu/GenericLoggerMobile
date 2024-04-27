import React, { useContext, useEffect, useRef, useState } from 'react'
import { Image, TextInput, View } from 'react-native'
import CustomButton from '../shared/CustomButton';
import LogContext from '../Contexts/LogContext';
import Log from './Log';
import logSearch from './utility/logSearch';
import LoggerContext from '../Contexts/LoggerContext';

export default function Logs(props) {
    const { logs } = useContext(LogContext);
    const { loggers } = useContext(LoggerContext);
    const [filteredLogs, setFilteredLogs] = useState([]);
    const [searchKey, setSearchKey] = useState('');
    const timerRef = useRef(null);
    const [logger, setLogger] = useState();

    useEffect(() => {
        setFilteredLogs(logs.filter((log) => log.loggerId === props.route.params.id));
        setLogger(loggers.find((logger) => logger.id === props.route.params.id));
    }, [logs, loggers])

    function searchOperation(keyText) {
        const _logs = logs.filter((log) => log.loggerId === props.route.params.id && logSearch(keyText, log, logger));
        setFilteredLogs([..._logs]);
    }

    function searchKeyChange(text) {
        setSearchKey(text);
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            searchOperation(text);
        }, 1000);
    }

    return (
        <View>
            <View className='flex-row bg-sky-200'>
                <Image source={require('../shared/search.png')} className='w-10 h-full' />
                <TextInput placeholder="search" className='text-lg text-sky-900' value={searchKey} onChangeText={searchKeyChange} />
            </View>
            <View className='flex-row flex-wrap'>
                <CustomButton {...{ title: 'Add Log', style: 'h-24 w-24 bg-sky-500 m-1', textStyle: 'text-sky-100 text-xl font-bold text-center', onclick: () => props.navigation.navigate('LogEditor', { loggerId: props.route.params.id }) }} />
                {filteredLogs.map((log) => <Log key={log.id} {...{ log, navigation: props.navigation, loggerId: props.route.params.id }} />)}
            </View>
        </View>
    )
}
