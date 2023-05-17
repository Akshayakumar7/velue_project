import {StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {hp, wp} from '../../commonMethod/screenRatio';

const Fastphoto = props => {
  const {uri, customImageStyle} = props;
  return (
    <View>
      <FastImage
        style={[style.mainView, customImageStyle]}
        source={{
          uri: uri,
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
    </View>
  );
};
const style = StyleSheet.create({
  mainView: {
    width: wp(89),
    height: hp(22),
  },
});

export default Fastphoto;
