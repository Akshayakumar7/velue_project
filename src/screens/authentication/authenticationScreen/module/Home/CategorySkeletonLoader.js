import {View, Text} from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const CategorySkeletonLoader = () => {
  return (
    <View>
      <SkeletonPlaceholder borderRadius={4}>
        <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
          <SkeletonPlaceholder.Item
            width={45}
            height={40}
            borderRadius={50}
            style={{margin: 10}}
          />
          <SkeletonPlaceholder.Item>
            <SkeletonPlaceholder.Item
              width={120}
              height={40}
              borderRadius={10}
            />
          </SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item marginLeft={10}>
            <SkeletonPlaceholder.Item
              width={120}
              height={40}
              borderRadrius={10}
            />
          </SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item marginLeft={10}>
            <SkeletonPlaceholder.Item
              width={120}
              height={40}
              borderRadius={10}
            />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </View>
  );
};

export default CategorySkeletonLoader;
