import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CounterState from './src/screens/slide2/demoTang';
import Header from './src/component/header';
import Bai2 from './src/screens/lab1/bai2';
import Bai3Lab1 from './src/screens/lab1/bai3';
import Main from './src/screens/lab2/Main';

export default function App() {
  return (
   //<CounterState></CounterState>
  // <Header title="trang chủ"></Header>
  //<Bai2></Bai2>
  //<Bai3Lab1></Bai3Lab1>
  <Main></Main>
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


