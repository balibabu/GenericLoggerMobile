import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import OptionEntry from './OptionEntry';
import CustomButton from '../../../shared/CustomButton';
import LoggerContext from '../../../Contexts/LoggerContext';
import LargeTextInput from '../../../shared/UIComponents/LargeTextInput';

export default function OptionPage(props) {
    const optionsReqFields = 'options,multiple select,radio'.split(',');
    const { field, setField } = useContext(LoggerContext);

    function autoAddHandler() {
        setField((prev) => ({ ...prev, autoAdd: !prev.autoAdd }));
    }

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
    const params = { field: props.field, formDetail: props.formDetail, setFormDetail: props.setFormDetail };
    
    return <View>
        {page}
        <LargeTextInput {...{ field: { fieldName: 'extra' }, formDetail: field, setFormDetail: setField, placeholder: '{\n\t\tkey1:value1,\n\t\tkey2:value2\n}' }} />
    </View>;
}
