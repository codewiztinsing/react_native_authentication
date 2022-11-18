import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,SafeAreaView} from 'react-native';
import RegisterUserScreen from './src/screens/RegisterUserScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
     <RegisterUserScreen />
  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
