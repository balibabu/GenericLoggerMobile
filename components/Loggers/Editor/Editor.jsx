import { FlatList, Text, TextInput, ToastAndroid, View } from "react-native";
import FieldRow from "./FieldRow";
import { useContext, useEffect } from "react";
import CustomButton from "../../shared/CustomButton";
import LoggerContext from "../../Contexts/LoggerContext";

// npm i react-native-draggable-flatlist
export default function Editor(props) {
    const { logger, setLogger, loggers, addLogger, updateLogger, fields, setFields } = useContext(LoggerContext);

    useEffect(() => {
        if (props.route.params) {
            const logger = loggers.find((logger) => logger.id === props.route.params.id);
            setLogger(logger);
            setFields(logger.fields);
        } else {
            setLogger({});
            setFields([]);
        }
    }, []);


    function SaveHandler() {
        const _logger = { ...logger, fields };
        if (props.route.params) {
            updateLogger(_logger);
        } else {
            if (checkDuplicateLogger(loggers, _logger)) {
                return;
            }
            addLogger(_logger);
        }
        props.navigation.goBack();
    }

    return (
        <View className='m-2 flex-1'>
            <View className='border-2 border-sky-900 p-1 mb-2'>
                <Text className='ml-1 text-sky-900'>Add Logger Title</Text>
                <TextInput className='text-lg text-sky-900 font-bold p-1'
                    value={logger.title || ''}
                    onChangeText={(text) => setLogger((prev) => ({ ...prev, title: text }))}
                />
            </View>

            <CustomButton {...{ title: '+ Add field', style: 'bg-sky-200 p-1', onclick: () => props.navigation.navigate('AddField') }} />

            <FlatList
                data={fields}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <FieldRow {...{ navigation: props.navigation, item, index }} />
                )}
            />

            <View className='flex-row justify-between mx-2 mb-1'>
                <CustomButton {...{ title: 'cancel', style: '', onclick: () => props.navigation.goBack() }} />
                <CustomButton {...{ title: 'save', style: '', onclick: SaveHandler }} />
            </View>

        </View>

    )
}


function checkDuplicateLogger(loggers, logger) {
    for (const _logger of loggers) {
        if (_logger.title === logger.title) {
            ToastAndroid.show('logger with same title is already present !', ToastAndroid.SHORT);
            return true;
        }
    }
    return false;
}