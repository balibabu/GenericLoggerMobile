import DropDownPicker from 'react-native-dropdown-picker';
import React, { useContext, useEffect, useState } from 'react'
import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import CustomButton from '../shared/CustomButton';
import FieldRow from './FieldRow';
import LoggerContext from '../Contexts/LoggerContext';
import OptionPage from './option/OptionPage';

export default function AddField(props) {
    const [dropdownOps, setDropdownOps] = useState([
        { label: 'Text', value: 'Text' },
        { label: 'Large Text', value: 'Large Text' },
        { label: 'Checkbox', value: 'Checkbox' },
        { label: 'Options', value: 'Options' },
        { label: 'Date', value: 'Date' },
        { label: 'Time', value: 'Time' },
        { label: 'Date Time', value: 'Date Time' },
        { label: 'Key Value Pair', value: 'Key Value Pair' },
        { label: 'Multiple Select', value: 'Multiple Select' },
        { label: 'Radio', value: 'Radio' },
    ]);

    const { fields, addField, updateField, logger, setFields, field, setField } = useContext(LoggerContext);

    const [open, setOpen] = useState(false);
    const [fieldType, setFieldType] = useState('Text');

    useEffect(() => {
        if (props.route.params) {
            const foundField = fields.find((field, index) => index === props.route.params.index);
            setField(foundField);
            setFieldType(foundField.fieldType);
        } else {
            setField({});
        }
    }, []);

    function addHandler() {
        const _field = { ...field, fieldType };
        // console.log(logger);
        if (props.route.params) {
            updateField(_field, props.route.params.index);
        } else {
            addField(_field);
            // setFields((prev) => [...prev, field]);
        }
        props.navigation.goBack();
    }


    return (
        <View className='m-2 flex-1'>
            <View className='border-2 border-sky-900 p-1 mb-2 rounded-md'>
                <Text className='text-lg p-0 m-0 font-bold'>Label Name</Text>
                <TextInput
                    className='text-lg text-sky-900  p-0 m-0'
                    value={field.fieldName || ''}
                    onChangeText={(text) => setField((prev) => ({ ...prev, fieldName: text }))}
                />
            </View>

            <DropDownPicker
                open={open}
                setOpen={setOpen}
                items={dropdownOps}
                setItems={setDropdownOps}
                value={fieldType}
                setValue={setFieldType}
            />

            {/* <CustomButton {...{ title: 'option', style: 'bg-sky-300 mt-2 p-2 rounded-md ', onclick: () => props.navigation.navigate('OptionPage', { fieldType }) }} /> */}

            <View className='mt-2'>
                <OptionPage {...{ fieldType }} />
            </View>


            <View className='flex-row justify-between mx-1 mb-1' style={styles.buttons}>
                <CustomButton {...{ title: 'cancel', style: '', onclick: () => props.navigation.goBack() }} />
                <CustomButton {...{ title: 'ok', style: '', onclick: addHandler }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    buttons: {
        // position: 'absolute',
        // bottom: 0,
        // justifyContent: 'between'
    }
});
// className='flex-row justify-between mx-3 mb-1'