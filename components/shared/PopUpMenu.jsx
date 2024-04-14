import React from 'react'
import { Text, View } from 'react-native';
import { Menu, MenuOption, MenuOptions, MenuTrigger } from "react-native-popup-menu";


export default function PopUpMenu(props) {

    return (
        <View>
            <Menu>
                <MenuTrigger><Text className='font-bold text-sky-950 text-md px-2 text-right'>{props.triggerText}</Text></MenuTrigger>
                <MenuOptions>
                    {props.menus && props.menus.map((menu, index) => <MenuOption key={index} onSelect={menu.click}><Text className='text-sky-900'>{menu.title}</Text></MenuOption>)}
                    {/* <MenuOption onSelect={() => props.navigation.navigate('AddField', { index: props.index })}><Text className={textColor.dark}>Modify</Text></MenuOption> */}
                    {/* <MenuOption onSelect={deleteHandler}><Text className={textColor.dark}>Delete</Text></MenuOption> */}
                </MenuOptions>
            </Menu>
        </View>
    );
}
