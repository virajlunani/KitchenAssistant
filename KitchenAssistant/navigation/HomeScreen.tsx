import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// @ts-expect-error TS(2307): Cannot find module 'react-native-vector-icons/Ioni... Remove this comment to see the full error message
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import ChatScreen from './screens/ChatScreen';
import ProfileScreen from './screens/ProfileScreen';
import Globals from '../Globals';

//Screen names
const chatName: string = "Chat";
const profileName: string = "Profile";

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  return (
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
        tabBarIcon: ({
          focused,
          color,
          size
        }: any) => {
          let iconName;
          let rn = route.name;

          if (rn === chatName) {
            iconName = focused ? 'chatbox' : 'chatbox-outline';

          } else if (rn === profileName) {
            iconName = focused ? 'ios-person' : 'ios-person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>

      <Tab.Screen name={chatName} component={ChatScreen} />
      <Tab.Screen name={profileName} component={ProfileScreen} />

    </Tab.Navigator>
  );
}