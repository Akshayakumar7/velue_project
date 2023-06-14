import {React, useContext} from 'react';

import {View, Text, Button} from 'react-native';
import { PracticeContext } from '../useContext/PracticeContext';

const ScreenOne = ({navigation}) => {
  const {val1, setVal1, val2, setVal2, val3, setVal3} =
    useContext(PracticeContext);
  const onPressButton = () => {
    setVal1(val1 + 1);
    setVal2(val2 + 1);
    setVal3(val3 + 1);
  };
  return (
    <View>
      <Text style={{color: 'black', fontSize: 30}}>SreenOne</Text>
      <Button
        title="To Screen Two"
        onPress={() => navigation.navigate('ScreenTwo')}
      />
      <View style={{height: 10}} />
      <Text style={{color: 'black', fontSize: 30, textAlign: 'center'}}>
        {val1}
      </Text>
      <View style={{height: 10}} />
      <Text style={{color: 'black', fontSize: 30, textAlign: 'center'}}>
        {val2}
      </Text>
      <View style={{height: 10}} />
      <Text style={{color: 'black', fontSize: 30, textAlign: 'center'}}>
        {val3}
      </Text>
      <View style={{height: 10}} />
      <Button title="Update" onPress={onPressButton} />
    </View>
  );
};

export default ScreenOne;
