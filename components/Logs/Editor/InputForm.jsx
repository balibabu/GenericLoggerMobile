import React from 'react'
import { Text, View } from 'react-native'
import SingleLineText from '../../shared/UIComponents/SingleLineText';
import LargeTextInput from '../../shared/UIComponents/LargeTextInput';
import Checkbox from '../../shared/UIComponents/Checkbox';
import DateField from '../../shared/UIComponents/DateField';
import TimeField from '../../shared/UIComponents/TimeField';
import DateTimeField from '../../shared/UIComponents/DateTimeField';
import SelectOption from '../../shared/UIComponents/SelectOption';
import RadioButton from '../../shared/UIComponents/RadioButton';
import MultipleSelect from '../../shared/UIComponents/MultipleSelect';
import KeyValueField from '../../shared/UIComponents/KeyValueField';

export default function InputForm(props) {
    const type = props.field.fieldType.trim().toLowerCase();

    let ui = <></>;
    const params = { field: props.field, formDetail: props.formDetail, setFormDetail: props.setFormDetail };

    if (type === 'text') {
        ui = <SingleLineText {...params} />
    } else if (type === 'large text') {
        ui = <LargeTextInput {...params} />
    } else if (type === 'checkbox') {
        ui = <Checkbox {...params} />
    } else if (type === 'large text') {
        ui = <LargeTextInput {...params} />
    } else if (type === 'date') {
        ui = <DateField {...params} />
    } else if (type === 'time') {
        ui = <TimeField {...params} />
    } else if (type === 'date time') {
        ui = <DateTimeField {...params} />
    } else if (type === 'options') {
        ui = <SelectOption {...params} />
    } else if (type === 'radio') {
        ui = <RadioButton {...params} />
    } else if (type === 'multiple select') {
        ui = <MultipleSelect {...params} />
    } else if (type === 'key value pair') {
        ui = <KeyValueField {...params} />
    }

    return ui;
}


// const [dropdownOps, setDropdownOps] = useState([
//     { label: 'Text', value: 'Text' },
//     { label: 'Large Text', value: 'Large Text' },
//     { label: 'Checkbox', value: 'Checkbox' },
//     { label: 'Options', value: 'Options' },
//     { label: 'Date', value: 'Date' },
//     { label: 'Time', value: 'Time' },
//     { label: 'Date Time', value: 'Date Time' },
//     { label: 'Key Value Pair', value: 'Key Value Pair' },
//     { label: 'Multiple Select', value: 'Multiple Select' },
//     { label: 'Radio', value: 'Radio' },
// ]);