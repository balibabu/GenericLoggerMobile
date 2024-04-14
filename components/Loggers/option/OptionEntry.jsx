import React, { useContext, useState } from 'react'
import { FlatList, Text, TextInput, View } from 'react-native'
import CustomButton from '../../shared/CustomButton';
import LoggerContext from '../../Contexts/LoggerContext';



export default function OptionEntry() {
    const { field, setField } = useContext(LoggerContext);
    const [option, setOption] = useState('');

    function addHandler() {
        const oldOptions = field.options || [];
        setField((prev) => ({ ...prev, options: [...oldOptions, option] }));
        setOption('');
    }

    function deleteHandler(index) {
        setField((prev) => ({ ...prev, options: [...prev.options.filter((op, i) => i !== index)] }));
    }

    return (
        <View>
            <View className='flex-row border-2 border-sky-900  rounded-md'>
                <TextInput className='text-lg text-sky-900 font-bold p-1 grow' value={option} onChangeText={(text) => setOption(text)} />
                <CustomButton {...{ title: 'add', style: 'bg-sky-200 border-l-2 border-sky-900', onclick: addHandler }} />
            </View>
            <FlatList
                data={field.options || []}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <OptionItem {...{ item, deleteHandler: () => deleteHandler(index) }} />
                )}
            />
        </View>
    );
}

function OptionItem(props) {

    return (
        <View className='flex-row justify-between mt-2 bg-sky-100 border-2 border-sky-300 rounded-lg'>
            <Text className='p-1 pl-2 text-sky-900 text-lg'>{props.item}</Text>
            <CustomButton {...{ title: 'del', style: 'bg-sky-300', onclick: props.deleteHandler }} />
        </View>
    );
}
