import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../misc/colors';

const Note = ({item}) => {

  const {title, desc} = item;

  return (
    <View style={styles.container}>
      <Text numberOfLines={2} style={styles.title}>{title}</Text>
      <Text numberOfLines={3}>{desc}</Text>
    </View>
  );
};

export default Note;

const width = Dimensions.get('window').width - 40

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        width: width / 2 - 10,
        padding: 8,
        borderRadius: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        color: colors.light
    }
});
