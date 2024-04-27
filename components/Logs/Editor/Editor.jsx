import React, { useContext, useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import LoggerContext from '../../Contexts/LoggerContext';
import InputForm from './InputForm';
import LogContext from '../../Contexts/LogContext';
import CustomButton from '../../shared/CustomButton';
import DateField from '../../shared/UIComponents/DateField';


export function Editor(props) {
    const { loggers } = useContext(LoggerContext);
    const { addLog, logs, updateLog } = useContext(LogContext);
    const [logger, setLogger] = useState({});
    const [formDetail, setFormDetail] = useState({});

    useEffect(() => {
        const foundLogger = loggers.find((logger) => logger.id === props.route.params.loggerId);
        setLogger(foundLogger);
        if (props.route.params.logId) {
            const foundLog = logs.find((log) => log.id === props.route.params.logId);
            setFormDetail(foundLog);
        }
    }, []);


    function saveHandler() {
        if (props.route.params.logId) {
            updateLog(formDetail);
        } else {
            addLog(props.route.params.loggerId, formDetail);
        }
        props.navigation.goBack();
    }

    return (
        <View className='mx-1 flex-1'>
            <Text className='text-xl font-black text-sky-900'>{logger.title}</Text>
            {/* {
                logger.fields && logger.fields.map((field) => {
                    return <Text>{field.fieldName}</Text>
                })
            } */}
            <FlatList
                data={logger.fields}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <InputForm {...{ field: item, formDetail, setFormDetail }} />
                )}
            />
            <View className='flex-row justify-between'>
                <CustomButton {...{ title: 'cancel', style: '', onclick: () => props.navigation.goBack() }} />
                <CustomButton {...{ title: 'save', style: '', onclick: saveHandler }} />
            </View>
        </View>
    )
}
