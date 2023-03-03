import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import colors from '../misc/colors';
import SearchBar from '../components/SearchBar';
import RoundIconBtn from '../components/RoundIconBtn';
import NoteInputModal from '../components/NoteInputModal';

const NoteScreen = ({user}) => {
  const [greet, setGreet] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const findGreet = () => {
    // fungsi untuk mendapat data waktu sekarang menggunakan Date.
    const hours = new Date().getHours();
    // console.log(hours)

    if (hours === 0 || hours < 12) return setGreet('Morning');
    if (hours === 1 || hours < 17) return setGreet('Afternoon');
    else return setGreet('Evening');
  };

  useEffect(() => {
    findGreet();
  }, []);

  const handleOnSubmit = (title, desc) => {
    console.log(title, desc)
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.light} />
      <View style={styles.container}>
        <Text style={styles.header}>{`Good ${greet} ${user.name}`}</Text>
        <SearchBar containerStyle={{marginVertical: 15}} />
        <View
          style={[StyleSheet.absoluteFillObject, styles.emptyHeaderContainer]}>
          <Text style={styles.emptyHeader}>Add Notes</Text>
          <RoundIconBtn
            antIconName="plus"
            style={styles.addBtn}
            onPress={() => setModalVisible(true)}
          />
        </View>
      </View>
      <NoteInputModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={handleOnSubmit}
      />
    </>
  );
};

export default NoteScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  emptyHeaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    zIndex: -1,
  },
  emptyHeader: {
    fontSize: 30,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    opacity: 0.3,
  },
  addBtn: {
    position: 'absolute',
    right: 15,
    bottom: 50,
    // backgroundColor: 'yellow'
  },
});
