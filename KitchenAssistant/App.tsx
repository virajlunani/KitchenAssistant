import { StyleSheet } from 'react-native';
import { registerRootComponent } from 'expo';
import { ProfileProvider } from './profile-components/ProfileContext';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from './navigation/screens/login-screens/StartScreen';
import LoginScreen from './navigation/screens/login-screens/LoginScreen';
import RegisterScreen from './navigation/screens/login-screens/RegisterScreen';
import HomeScreen from './navigation/HomeScreen';
import ResetPasswordScreen from './navigation/screens/login-screens/ResetPasswordScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ProfileProvider>
      <NavigationContainer>
      <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ProfileProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

registerRootComponent(App);