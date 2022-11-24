import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Codes from './Codes';
import Generate from './Generate';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Codes"
          component={Codes}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Generate" component={Generate} options={{ title: '' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
