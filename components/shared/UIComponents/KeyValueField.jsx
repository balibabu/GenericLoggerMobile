import React, { useEffect, useState } from 'react'
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'
import CustomButton from '../CustomButton'

export default function KeyValueField(props) {

    const [keyValue, setKeyValue] = useState({});

    function addKeyValue() {
        props.setFormDetail((prev) => ({ ...prev, [props.field.fieldName]: { ...prev[props.field.fieldName], [keyValue.key]: keyValue.value } }));
        setKeyValue({});
    }

    function keyValueClick(key) {
        setKeyValue({ key, value:props.formDetail[props.field.fieldName][key] });
        props.setFormDetail((prev) => {
            const keyValues = { ...prev[props.field.fieldName] };
            delete keyValues[key];
            return { ...prev, [props.field.fieldName]: keyValues };
        })
    }

    return (
        <View className='bg-sky-100 border-2 border-sky-900 m-1 rounded-md  justify-between overflow-hidden'>
            <View className='bg-sky-200 p-2 border-b-2 border-sky-900'>
                <Text className='text-xl font-bold text-sky-900'>{props.field.fieldName}</Text>
            </View>
            <View className='border-2 border-sky-500 m-2 rounded-md overflow-hidden'>
                <View className='flex-row justify-between'>
                    <TextInput className='text-lg text-sky-900 font-bold p-1 bg-sky-200 flex-grow' placeholder='key'
                        value={keyValue.key || ''}
                        onChangeText={(text) => setKeyValue((prev) => ({ ...prev, key: text }))}
                    />
                    <TextInput placeholder='value' className='text-lg text-sky-900 font-bold p-1 bg-green-200 flex-grow border-l-2 border-sky-500'
                        value={keyValue.value || ''}
                        onChangeText={(text) => setKeyValue((prev) => ({ ...prev, value: text }))}
                    />
                    <CustomButton {...{ title: 'add', style: 'bg-sky-300 border-l-2 border-sky-500', onclick: addKeyValue }} />
                </View>
            </View>
            <View className=' mx-3'>
                {props.formDetail[props.field.fieldName] && Object.entries(props.formDetail[props.field.fieldName]).map((kv) => {
                    return (
                        <TouchableOpacity onPress={() => keyValueClick(kv[0])}>
                            <View key={kv[0]} className='flex-row justify-between bg-sky-200 mb-2 rounded-xl border-2 border-sky-500'>
                                <Text className='w-1/2 px-3 py-1 text-sky-900 font-semibold'>{kv[0]}</Text>
                                <Text className='w-1/2 px-3 py-1 text-sky-900 font-semibold border-l-2 border-sky-500'>{kv[1]}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </View>

    )
}

