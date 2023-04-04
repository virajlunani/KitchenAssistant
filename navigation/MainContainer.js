import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import ChatScreen from './screens/ChatScreen';
import ProfileScreen from './screens/ProfileScreen';
import Globals from '../Globals';

//Screen names
const chatName = "Chat";
const profileName = "Profile";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={chatName}
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: Globals.COLOR.DARKERGREEN,
          tabBarInactiveTintColor: "grey",
          tabBarLabelStyle: {
            fontSize: 10
          },
          tabBarStyle: [
            {
              display: "flex"
            },
            null
          ],
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === chatName) {
              iconName = focused ? 'chatbox' : 'chatbox-outline';

            } else if (rn === profileName) {
              iconName = focused ? 'ios-person' : 'ios-person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}>

        <Tab.Screen name={chatName} component={ChatScreen} />
        <Tab.Screen name={profileName} component={ProfileScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;