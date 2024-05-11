import React from 'react';
import {View, Text} from 'react-native';

type IconCategoryProps = {
  icon: any;
  backgroundColor: string;
  text: string;
  onTap: any;
};

const IconCategory = ({
  icon,
  backgroundColor,
  text,
  onTap,
}: IconCategoryProps) => {
  return (
    <View style={{margin: 8, alignItems: 'center'}}>
      <View
        style={{
          padding: 12,
          backgroundColor: backgroundColor,
          borderRadius: 12,
        }}>
        {icon}
      </View>
      <Text style={{marginTop: 8}}>{text}</Text>
    </View>
  );
};

export default IconCategory;
