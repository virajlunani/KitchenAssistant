import { StyleSheet } from 'react-native';
import { registerRootComponent } from 'expo';
import MainContainer from './navigation/MainContainer';
import { ProfileProvider } from './profile-components/ProfileContext';

export default function App() {
  return (
    <ProfileProvider>
      <MainContainer/>
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