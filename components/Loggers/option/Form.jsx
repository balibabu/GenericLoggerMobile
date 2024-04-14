import React, { useContext, useState } from 'react'
import { FlatList, Text, TextInput, View } from 'react-native'
import CustomButton from '../../shared/CustomButton'
import LoggerContext from '../../Contexts/LoggerContext';

export default function Form() {
    const { field, setField } = useContext(LoggerContext);
    const [option, setOption] = useState('');

    function addHandler() {
        const oldOptions = field.options || [];
        setField((prev) => ({ ...prev, options: [...oldOptions, option] }));
        setOption('');
    }

    return (
        <View>
            <View className='flex-row border-2 border-sky-900 m-1 rounded-md'>
                <TextInput className='text-lg text-sky-900 font-bold p-1 grow' value={option} onChangeText={(text) => setOption(text)} />
                <CustomButton {...{ title: 'add', style: 'bg-sky-200 border-l-2 border-sky-900', onclick: addHandler }} />
            </View>
            <FlatList
                data={field.options || []}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View><Text>{item}</Text></View>
                )}
            />
        </View>
    );
}
