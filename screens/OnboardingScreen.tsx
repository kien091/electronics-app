import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {OnboardFlow} from 'react-native-onboard';
import {ScreenName, useAppNavigation} from '../navigation/AppNavigation';

type OnBoardingScreenProps = {
  navigation: any;
};

const OnBoardingScreen = ({navigation}: OnBoardingScreenProps) => {
  return (
    <View style={styles.container}>
      <OnboardFlow
        onDone={() => navigation.navigate(ScreenName.Login)}
        pages={[
          {
            imageUri: Image.resolveAssetSource(
              require('../assets/images/explore_products.gif'),
            ).uri,
            title: 'Khám phá sản phẩm',
            subtitle: 'Ứng dụng đa dạng sản phẩm tha hồ chọn lựa',
          },
          {
            imageUri: Image.resolveAssetSource(
              require('../assets/images/purcharse.gif'),
            ).uri,
            title: 'Thanh toán nhanh chóng',
            subtitle: 'Dễ dàng thanh toán qua ví điện tử hoặc tiền mặt',
          },
          {
            imageUri: Image.resolveAssetSource(
              require('../assets/images/delivery.gif'),
            ).uri,
            title: 'Chuyển phát nhanh',
            subtitle:
              'Giao hàng tận nơi trong thời gian nhanh nhất, đảm bảo an toàn sản phẩm',
          },
          {
            imageUri: Image.resolveAssetSource(
              require('../assets/images/take_care.gif'),
            ).uri,
            title: 'Chăm sóc khách hàng',
            subtitle:
              'Hỗ trợ khách hàng 24/7, giải đáp mọi thắc mắc của khách hàng',
          },
        ]}
        type={'fullscreen'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  gif: {
    width: 300,
    height: 300,
  },
});

export default OnBoardingScreen;
