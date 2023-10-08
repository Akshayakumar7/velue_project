import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {color} from '../../assets/colors/color';

const NoDataText = props => {
  const {label = 'Currently No Data Available', customStyle} = props;
  return (
    <View style={customStyle}>
      <Text style={style.noDataTextStyle}>{label}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  noDataTextStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: color.darkblue,
    textAlign: 'center',
  },
});

export default NoDataText;
