import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../misc/colors';
import RoundIconBtn from '../components/RoundIconBtn';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Intro = ({onFinish}) => {
  const [name, setName] = useState('');

  const handleOnChangeText = text => {
    setName(text);
  };
  // console.log(user)

  const handleSubmit = async () => {
    const user = {name: name}
    await AsyncStorage.setItem('user', JSON.stringify(user))

    if (onFinish) onFinish()
  }

  return (
    <>
      <StatusBar hidden />
      <View style={styles.container}>
        <Text style={styles.inputTitle}>Enter Your Name to Continue :</Text>
        <TextInput
          placeholder="Type here"
          style={styles.textInput}
          value={name}
          onChangeText={handleOnChangeText}
        />
        {/* Btn hanya tambil jika ada inputan dari user */}
        {name.trim().length >= 3 ? <RoundIconBtn antIconName='arrowright' onPress={handleSubmit} /> : null}
      </View>
    </>
  );
};

export default Intro;

// Cara paling efektif memakai width karena setiap device berbeda ukuran.
const width = Dimensions.get('window').width - 50;
// console.log(width)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputTitle: {
    alignSelf: 'flex-start',
    paddingLeft: 25,
    marginBottom: 10,
    opacity: 0.5,
  },
  textInput: {
    borderWidth: 2,
    borderColor: colors.primary,
    color: colors.primary,
    width: width,
    height: 50,
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 15,
    marginBottom: 15
  },
});
