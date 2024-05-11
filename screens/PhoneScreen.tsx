import {
  View,
  Text,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Carousel from '@demfabris/react-native-snap-carousel';
import BannerSlider from '../components/BannerSlider';
import {windowWidth} from '../utils/Dimentions';
import {sliderData} from '../models/data';
import IconCategory from '../components/IconCategory';
import ListItem from '../components/ListItem';

export default function HomeScreen({navigation}: any) {
  const carouselRef = React.useRef(null);

  const renderBanner = ({item, index}: any) => {
    return <BannerSlider data={item} />;
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView
        contentContainerStyle={{padding: 14}}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 26,
            backgroundColor: 'white',
          }}>
          <Text
            style={{fontSize: 19, color: '#000', fontFamily: 'Roboto-Medium'}}>
            Hello Kien
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={{marginRight: 10}}>
              <Ionicons name="search-outline" size={24} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={{marginHorizontal: 10}}>
              <Ionicons name="notifications-outline" size={24} color={'#000'} />
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft: 10}}>
              <Ionicons name="cart-outline" size={24} color={'#000'} />
            </TouchableOpacity>
          </View>
        </View>

        <Carousel
          ref={carouselRef}
          data={sliderData}
          renderItem={renderBanner}
          sliderWidth={windowWidth}
          itemWidth={windowWidth - 30}
          loop={true}
          autoplay={true}
          autoplayDelay={5000}
          autoplayInterval={7000}
          containerCustomStyle={{marginBottom: 20, marginHorizontal: -15}}
        />

        <View>
          <View style={{marginVertical: 12}}>
            <Text
              style={{
                fontFamily: 'Roboto-Medium',
                fontSize: 18,
                color: '#000',
              }}>
              Popular Categories
            </Text>
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{marginHorizontal: -8}}>
            <IconCategory
              icon={<Ionicons name="phone-portrait-outline" size={32} />}
              backgroundColor={'#ddd'}
              text={'Phone'}
              onTap={undefined}
            />
            <IconCategory
              icon={<Ionicons name="phone-portrait-outline" size={32} />}
              backgroundColor={'#ddd'}
              text={'Phone'}
              onTap={undefined}
            />
            <IconCategory
              icon={<Ionicons name="phone-portrait-outline" size={32} />}
              backgroundColor={'#ddd'}
              text={'Phone'}
              onTap={undefined}
            />
            <IconCategory
              icon={<Ionicons name="phone-portrait-outline" size={32} />}
              backgroundColor={'#ddd'}
              text={'Phone'}
              onTap={undefined}
            />
            <IconCategory
              icon={<Ionicons name="phone-portrait-outline" size={32} />}
              backgroundColor={'#ddd'}
              text={'Phone'}
              onTap={undefined}
            />
            <IconCategory
              icon={<Ionicons name="phone-portrait-outline" size={32} />}
              backgroundColor={'#ddd'}
              text={'Phone'}
              onTap={undefined}
            />
            <IconCategory
              icon={<Ionicons name="phone-portrait-outline" size={32} />}
              backgroundColor={'#ddd'}
              text={'Phone'}
              onTap={undefined}
            />
          </ScrollView>
        </View>

        <View>
          <View style={{marginVertical: 12}}>
            <Text
              style={{
                fontFamily: 'Roboto-Medium',
                fontSize: 18,
                color: '#000',
              }}>
              List Product
            </Text>
          </View>
          <ScrollView>
            <ListItem
              imageUri={
                'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/10/30/638342502751589917_ip-15-pro-max-dd-bh-2-nam.jpg'
              }
              name={'iPhone 15 Pro Max 256GB'}
              price={29290000}
              onPress={undefined}
            />
            <ListItem
              imageUri={
                'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/10/30/638342502751589917_ip-15-pro-max-dd-bh-2-nam.jpg'
              }
              name={'iPhone 15 Pro Max 256GB'}
              price={29290000}
              onPress={undefined}
            />
            <ListItem
              imageUri={
                'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/10/30/638342502751589917_ip-15-pro-max-dd-bh-2-nam.jpg'
              }
              name={'iPhone 15 Pro Max 256GB'}
              price={29290000}
              onPress={undefined}
            />
            <ListItem
              imageUri={
                'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/10/30/638342502751589917_ip-15-pro-max-dd-bh-2-nam.jpg'
              }
              name={'iPhone 15 Pro Max 256GB'}
              price={29290000}
              onPress={undefined}
            />
            <ListItem
              imageUri={
                'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/10/30/638342502751589917_ip-15-pro-max-dd-bh-2-nam.jpg'
              }
              name={'iPhone 15 Pro Max 256GB'}
              price={29290000}
              onPress={undefined}
            />
            <ListItem
              imageUri={
                'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/10/30/638342502751589917_ip-15-pro-max-dd-bh-2-nam.jpg'
              }
              name={'iPhone 15 Pro Max 256GB'}
              price={29290000}
              onPress={undefined}
            />
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
