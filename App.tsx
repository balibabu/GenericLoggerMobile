import React from 'react';
import Loggers from './components/Loggers/Loggers';
import Logs from './components/Logs/Logs';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Editor from './components/Loggers/Editor/Editor';
import AddField from './components/Loggers/Editor/AddField';
import { CombinedContextProvider } from './components/Contexts/CombinedContext';
import { MenuProvider } from 'react-native-popup-menu';
import { Editor as LogEditor } from './components/Logs/Editor/Editor';

const Stack = createStackNavigator();
function App(): React.JSX.Element {
    return (
        <CombinedContextProvider>
            <MenuProvider>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={navStyle} initialRouteName='Loggers'>
                        <Stack.Screen name="Loggers" component={Loggers} />
                        <Stack.Screen name="Editor" component={Editor} />
                        <Stack.Screen name="AddField" component={AddField} />
                        <Stack.Screen name="Logs" component={Logs} />
                        <Stack.Screen name="LogEditor" component={LogEditor} />
                    </Stack.Navigator>
                </NavigationContainer>
            </MenuProvider>
        </CombinedContextProvider>
    );
}

const navStyle = {
    headerStyle: { backgroundColor: 'rgb(8 47 73)', height: 50 },
    headerTintColor: 'rgb(186 230 253)',
    ...TransitionPresets.SlideFromRightIOS,
}

export default App;
