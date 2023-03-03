import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
// import { AntDesign } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../misc/colors';

const RoundIconBtn = ({antIconName, size, color, style, onPress}) => {
  return (
    <Icon
      name={antIconName}
      size={size || 24}
      color={color || colors.dark}
      styles={[styles.icon, {...style}]}
      onPress={onPress}
    />
  );
};

export default RoundIconBtn;

const styles = StyleSheet.create({
  icon: {
    backgroundColor: colors.primary,
    padding: 15,
  },
});
