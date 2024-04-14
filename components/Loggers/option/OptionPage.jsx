import React, { useContext, useState } from 'react'
import { Text, View } from 'react-native'
import SingleLineText from '../../shared/UIComponents/SingleLineText';
import LargeTextInput from '../../shared/UIComponents/LargeTextInput';
import Checkbox from '../../shared/UIComponents/Checkbox';
import Form from './Form';
import SelectOption from '../../shared/UIComponents/SelectOption';
import OptionEntry from './OptionEntry';
import CustomButton from '../../shared/CustomButton';
import LoggerContext from '../../Contexts/LoggerContext';

export default function OptionPage(props) {
    const optionsReqFields = 'options,multiple select,radio'.split(',');
    const { field, setField } = useContext(LoggerContext);

    function autoAddHandler() {
        setField((prev) => ({ ...prev, autoAdd: !prev.autoAdd }));
    }

    const title = 'default value';
    let page = <></>;
    if (optionsReqFields.includes(props.fieldType.trim().toLowerCase())) {
        page = <OptionEntry />;
    }

    if (['date', 'time', 'date time'].includes(props.fieldType.trim().toLowerCase())) { // input text for json
        page = (
            <View className='flex-row justify-between my-2 mx-1 bg-sky-200  p-1 rounded-md'>
                <Text className='text-xl text-sky-900'>Auto add: {field.autoAdd ? 'true' : 'false'}</Text>
                <CustomButton {...{ title: 'change', style: '', onclick: autoAddHandler }} />
            </View>
        );
    }



    // if (props.fieldType === 'Text') {
    //     return <SingleLineText {...{ title }} />
    // } else if (props.fieldType === 'Large Text') {
    //     return <LargeTextInput {...{ title }} />
    // } else if (props.fieldType === 'Checkbox') {
    //     return <Checkbox {...{ title }} />
    // } else if (props.fieldType === 'Options') {
    //     return (
    //         <View>
    //             {/* <SelectOption {...{ title }} /> */}
    //             <OptionEntry />
    //         </View>
    //     );
    // }
    return page;
}
