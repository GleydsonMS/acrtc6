import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Main from './pages/Main';
import InstructionsFirst from  './pages/InstructionsFirst';
import InstructionsSecond from './pages/InstructionsSecond';
import Person from './pages/Person';
import Results from './pages/Results';
import RunTest from './pages/RunTest';
import Runway from './pages/Runway';

export default function Routes() {
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Main" component={Main} />
                <AppStack.Screen name="InstructionsFirst" component={InstructionsFirst} />
                <AppStack.Screen name="InstructionsSecond" component={InstructionsSecond} />
                <AppStack.Screen name="Person" component={Person} />
                <AppStack.Screen name="RunTest" component={RunTest} />
                <AppStack.Screen name="Runway" component={Runway} />
                <AppStack.Screen name="Results" component={Results} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}