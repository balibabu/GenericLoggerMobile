import React from 'react'
import { Text, View } from 'react-native'
import SingleLineText from '../../shared/UIComponents/SingleLineText';
import LargeTextInput from '../../shared/UIComponents/LargeTextInput';
import Checkbox from '../../shared/UIComponents/Checkbox';

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
    }

    return ui;

    return (
        <View>
            <Text>{props.field.fieldName} {props.field.fieldType}</Text>
        </View>
    )
}
