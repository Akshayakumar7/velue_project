import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Modal,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {color} from '../../assets/colors/color';
import {hp, wp} from '../../commonMethod/screenRatio';
import SvgImage from './svgImage';
import {CLOSE_ICON} from '../../assets/imagepath/imagepath';
import styles from '../../general/generalStyleSheet';
import CheckSort from './CheckSort';

const BottomModal = props => {
  const {visible,onPressClose} = props;
  const [showModal, setShowModal] = useState(true);
  const [sortData, setSortData] = useState([
    {
      id: 0,
      value: 'Recommended',
      isChecked: false,
    },
    {
      id: 1,
      value: 'Newest First',
      isChecked: false,
    },
    {
      id: 2,
      value: 'Price - Low to High',
      isChecked: false,
    },
    {
      id: 3,
      value: 'Price - High to Low',
      isChecked: false,
    },
  ]);

  const onPressSort = async idVal => {
    const updatedData = sortData?.map(item => {
      return item?.id === idVal
        ? {...item, isChecked: true}
        : {...item, isChecked: false};
    });
    setSortData(updatedData);
    setShowModal(false);
    // setShowOrderIdbar(true);
  };

  const renderSortData = (item, index) => {
    return (
      <View>
        <View
          style={[
            item?.isChecked ? style.selectdFilter : style.notSelectedFilter,
          ]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '3%',
            }}>
            <Text style={{fontSize: 18, color: color.darkblue, width: '70%'}}>
              {item?.value ?? ''}
            </Text>
            <CheckSort
              isTrue={item?.isChecked ?? false}
              onPress={() => onPressSort(item?.id)}
            />
          </View>
        </View>
      </View>
    );
  };
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onDismiss={() => setShowModal(!showModal)}
        onRequestClose={() => setShowModal(!showModal)}>
        <View style={style.modalViewStyle}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: '3%',
            }}>
            <Text style={{fontSize: 22, color: color.darkblue}}>Sort by</Text>
            <TouchableOpacity onPress={onPressClose}>
              <SvgImage Source={CLOSE_ICON} height={hp(5)} width={wp(8.5)} />
            </TouchableOpacity>
          </View>
          <View style={styles.singleHeight} />
          <View style={styles.verticalLine} />
          <View style={styles.singleHeight} />
          <View>
            <FlatList
              data={sortData}
              renderItem={({item, index}) => renderSortData(item, index)}
              keyExtractor={item => item?.id}
              style={style.orderFlatStyle}
            />
          </View>

          <ScrollView></ScrollView>
        </View>
      </Modal>
    </View>
  );
};

const style = StyleSheet.create({
  modalViewStyle: {
    height: '40%',
    marginTop: 'auto',
    backgroundColor: color.white,
    borderTopLeftRadius: hp(3),
    borderTopRightRadius: hp(3),
    padding: hp(2),
  },
  selectdFilter: {
    backgroundColor: color.grey,
    borderRadius: hp(1),
    opacity: 0.7,
  },
});

export default BottomModal;
