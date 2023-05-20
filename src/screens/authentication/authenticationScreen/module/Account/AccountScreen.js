import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../../../../../component/common/appHeader';
import { color } from '../../../../../assets/colors/color';

const Profile = () => {
  return (
    <View>
      <View style={style.mainView}>
        <Header />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  mainView: {
    backgroundColor: color.lightGreen,
  },
});
export default Profile;
