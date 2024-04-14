import React, { useContext } from 'react'
import { Text, View } from 'react-native';
import { Menu, MenuOption, MenuOptions, MenuProvider, MenuTrigger } from "react-native-popup-menu";
import { textColor } from '../shared/colors';
import LoggerContext from '../Contexts/LoggerContext';


export default function PopUpMenu(props) {
    const { logger, setLogger, loggers, addLogger, updateLogger, deleteField } = useContext(LoggerContext);

    function deleteHandler() {
        deleteField(props.index);
        // setFields((prev) => [...prev.filter((_,index) => index !== props.index)]);
        // setLogger((prev) => ({ ...prev, fields: prev.fields.filter((_, index) => index !== props.index) }))
    }

    return (
        <View>
            <Menu>
                <MenuTrigger><Text className='font-bold text-sky-900 text-md px-2'>{props.triggerText}</Text></MenuTrigger>
                <MenuOptions>
                    <MenuOption onSelect={() => props.navigation.navigate('AddField', { index: props.index })}><Text className={textColor.dark}>Modify</Text></MenuOption>
                    <MenuOption onSelect={deleteHandler}><Text className={textColor.dark}>Delete</Text></MenuOption>
                </MenuOptions>
            </Menu>
        </View>
    );
}
