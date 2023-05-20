import React, {useState} from 'react';
import {FlatList, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import CustomTextInput from './customTextInput';
import {color} from '../../assets/colors/color';
import {hp} from '../../commonMethod/screenRatio';
import styles from '../../general/generalStyleSheet';

const CustomDropdown = props => {
  const {
    placeholder,
    rightIcon,
    rightIconHeight,
    rightIconWidth,
    customStyle,
    getBankName,
    value,
  } = props;
  const [showDropdowm, setShowDropdown] = useState(false);
  const BANK_NAME = [
    {name: 'Bank of Baroda'},
    {name: 'Bank of India'},
    {name: 'Canara Bank'},
    {name: 'Central Bank of India'},
    {name: 'Indian Bank'},
    {name: ' Indian Overseas Bank'},
    {name: 'Bank of Baroda'},
    {name: 'Bank of India'},
    {name: 'Canara Bank'},
    {name: 'Central Bank of India'},
    {name: 'Indian Bank'},
    {name: ' Indian Overseas Bank'},
  ];

  const onPressRightIcon = () => {
    setShowDropdown(!showDropdowm);
  };

  const onPressBankName = item => {
    getBankName(item?.name ?? '');
    setShowDropdown(!showDropdowm);
  };

  const renderBankList = item => {
    return (
      <View style={style.whiteBackground}>
        <TouchableOpacity onPress={() => onPressBankName(item)}>
          <View style={styles.singleHeight} />
          <Text style={style.bankListText}>{item?.name ?? ''}</Text>
          <View style={styles.smallHeight} />
          <View style={style.verticalDivider} />
          <View style={styles.singleHeight} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <CustomTextInput
        placeholder={value}
        rightIcon={rightIcon}
        rightIconHeight={rightIconHeight}
        rightIconWidth={rightIconWidth}
        onPressRightIcon={() => onPressRightIcon()}
        customStyle={customStyle}
        changeEyeIcon={true}
        onPressTextInput={() => onPressRightIcon()}
        value={value}
        editable={false}
      />

      {showDropdowm && (
        <View>
          <FlatList
            data={BANK_NAME}
            renderItem={({item}) => renderBankList(item)}
          />
        </View>
      )}
    </View>
  );
};
const style = StyleSheet.create({
  verticalDivider: {
    borderBottomWidth: hp(0.1),
    color: color.underLineColor,
  },
  bankListText: {
    fontSize: hp(2.5),
    color: color.darkblue,
    margin: hp(0.3),
  },
  whiteBackground: {backgroundColor: 'white'},
});
export default CustomDropdown;
