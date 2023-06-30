import React, {useState} from 'react';
import {Text, View,StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

const Home = props => {
  const {isVisible,onDismiss} = props;
  return (
    <View>
    
        <Modal
          animationType="slide"
          transparent={true}
          visible={showModal}
          onDismiss={onDismiss}>
          <View
            style={[style.mainView]}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingHorizontal: hp(3),
                  marginLeft: hp(1),
                  marginRight: hp(1),
                  paddingTop: hp(2),
                }}></View>
            </View>
          </View>
        </Modal>
     
    </View>
  );
};

const style = StyleSheet.create({
    mainView:{
        height: '40%',
        marginTop: 'auto',
        backgroundColor: color.white,
        borderTopLeftRadius: hp(3),
        borderTopRightRadius: hp(3),
      }
})
export default Home;
