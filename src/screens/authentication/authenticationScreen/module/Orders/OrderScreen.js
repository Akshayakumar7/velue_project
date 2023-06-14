import React,{useState} from 'react';
import {Text, View, Button} from 'react-native';
import AsynStorage from '@react-native-async-storage/async-storage';

const Order = () => {
  const [name, setName] = useState('');
  const getItem = async () => {
    const res = await AsynStorage.getItem('Name');
    console.log(res);
    setName(res);
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Hello, Order!</Text>
      <Button title="Get Data" onPress={() => getItem()} />
      <Text>{name}</Text>
    </View>
  );
};
export default Order;
