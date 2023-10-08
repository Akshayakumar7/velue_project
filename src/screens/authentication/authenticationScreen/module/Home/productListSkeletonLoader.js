
import {View, Text} from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const ProductSkeletonLoader = () => {
  return (
    <View>
      <SkeletonPlaceholder borderRadius={4}>
        <SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item
            width={'90%'}
            height={140}
            borderRadius={4}
            alignSelf="center"
            marginBottom={10}
          />
          <SkeletonPlaceholder.Item
            width={'90%'}
            height={140}
            borderRadius={4}
            alignSelf="center"
            marginBottom={10}
          />

          <SkeletonPlaceholder.Item
            width={'90%'}
            height={140}
            borderRadius={4}
            alignSelf="center"
            marginBottom={10}
          />

          <SkeletonPlaceholder.Item
            width={'90%'}
            height={140}
            borderRadius={4}
            alignSelf="center"
            marginBottom={10}
          />

          <SkeletonPlaceholder.Item
            width={'90%'}
            height={140}
            borderRadius={4}
            alignSelf="center"
            marginBottom={10}
          />

          <SkeletonPlaceholder.Item
            width={'90%'}
            height={140}
            borderRadius={4}
            alignSelf="center"
            marginBottom={10}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </View>
  );
};

export default ProductSkeletonLoader;

