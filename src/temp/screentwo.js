
import {View, Text, Button} from 'react-native';
import {React, useContext} from 'react';
import { PracticeContext } from '../useContext/PracticeContext';

const SreenTwo = ({navigation}) => {
  const {val1, setVal1, val2, setVal2, val3, setVal3} =
    useContext(PracticeContext);
  const onPressButton = () => {
    setVal1(val1 + 1);
    setVal2(val2 + 1);
    setVal3(val3 + 1);
  };
  return (
    <View>
      <Text style={{color: 'black', fontSize: 30}}>SreenTwo</Text>
      <Button
        title="To Screen One"
        onPress={() => navigation.navigate('ScreenOne')}
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

export default SreenTwo;