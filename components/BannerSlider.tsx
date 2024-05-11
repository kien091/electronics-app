import React from 'react';
import {View, Text, Image} from 'react-native';
import { windowWidth } from '../utils/Dimentions';

type BannerSliderProps = {
  data: any;
};

const BannerSlider = ({data}: BannerSliderProps) => {
  return (
    <View>
      <Image
        source={{uri: data.image}}
        style={{
          height: 230,
          width: windowWidth - 30,
          borderRadius: 10,
          resizeMode: 'stretch',
        }}
      />
    </View>
  );
};

export default BannerSlider;
