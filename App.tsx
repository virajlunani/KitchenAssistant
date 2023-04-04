import { StyleSheet } from 'react-native';
import { registerRootComponent } from 'expo';
import MainContainer from './navigation/MainContainer';

export default function App() {
  return (
    <MainContainer/>
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