import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {windowWidth} from '../utils/Dimentions';

type ListItemProps = {
  imageUri: string;
  name: string;
  price: number;
  onPress: any;
};

const ListItem = ({imageUri, name, price, onPress}: ListItemProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10,
      }}>
      <View style={{flexDirection: 'row', flex: 1}}>
        <Image
          source={{uri: imageUri}}
          style={{width: 55, height: 55, borderRadius: 10, marginRight: 8}}
        />
        <View style={{width: windowWidth - 200}}>
          <Text
            style={{
              color: '#333',
              fontFamily: 'Roboto-Medium',
              fontSize: 14,
              textTransform: 'uppercase',
            }}>
            {name}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              color: '#cb1c22',
              fontFamily: 'Roboto-Medium',
              fontSize: 14,
            }}>
            {price.toLocaleString('vi-VN')}đ
          </Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: '#0aada8',
          padding: 12,
          width: 90,
          borderRadius: 10,
        }}>
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            fontFamily: 'Roboto-Medium',
            fontSize: 14,
          }}>
          View
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListItem;
