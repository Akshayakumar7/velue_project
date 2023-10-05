import Toast from 'react-native-toast-message';

export const ShowToastMessage = (type, textOne = "BATHMART", textTwo) => {
  Toast.show({
    type: type,
    text1: textOne,
    text2: textTwo,
  });
};
