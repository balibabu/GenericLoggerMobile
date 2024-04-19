import React, { useEffect, useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';

export default function SelectOption(props) {
    const [dropdownOps, setDropdownOps] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(props.formDetail[props.field.fieldName] || dropdownOps[0]);

    useEffect(() => {
        const options = [];
        for (const op of props.field.options || []) {
            options.push({ label: op, value: op });
        }
        setDropdownOps(options);
    }, []);
    useEffect(() => {
        props.setFormDetail((prev) => ({ ...prev, [props.field.fieldName]: selectedValue }));
    }, [selectedValue])


    return (
        <View className='h-40'>
            <Text className='ml-1 text-sky-900 text-lg font-bold'>{props.title || 'select option'}</Text>
            <DropDownPicker className=''
                open={open}
                setOpen={setOpen}
                items={dropdownOps}
                setItems={setDropdownOps}
                value={selectedValue}
                setValue={setSelectedValue}
            />
        </View>
    )
}
