import {
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../misc/colors';
import RoundIconBtn from './RoundIconBtn';

const NoteInputModal = ({visible, onClose, onSubmit}) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  // method untuk tidak memunculkan keyboard diluar title dan note.
  const handleModalClose = () => {
    Keyboard.dismiss();
  };

  const handleOnChangeText = (text, valueFor) => {
    if (valueFor === 'title') return setTitle(text);
    if (valueFor === 'desc') return setDesc(text);
  };

  const handleSubmit = () => {
    if (!title.trim() && !desc.trim()) return onClose();
    onSubmit(title, desc);
    setTitle('');
    setDesc('');
    onClose();
  };

  const closeModal = () => {
    setTitle('');
    setDesc('');
    onClose();
  }

  return (
    <>
      <StatusBar hidden />
      <Modal visible={visible} animationType="fade">
        <View style={styles.container}>
          <TextInput
            placeholder="Title"
            placeholderTextColor="black"
            style={[styles.input, styles.title]}
            value={title}
            onChangeText={text => handleOnChangeText(text, 'title')}
          />
          <TextInput
            placeholder="Note"
            placeholderTextColor="black"
            multiline
            style={[styles.input, styles.desc]}
            value={desc}
            onChangeText={text => handleOnChangeText(text, 'desc')}
          />
          <View style={styles.btnContainer}>
            <RoundIconBtn
              antIconName="check"
              size={30}
              onPress={handleSubmit}
            />
            { title.trim() || desc.trim() ? <RoundIconBtn
              antIconName="close"
              size={30}
              style={{marginLeft: 30}}
              onPress={closeModal}
            /> : null}
          </View>
        </View>
        <TouchableWithoutFeedback onPress={handleModalClose}>
          <View style={[styles.modalBG, StyleSheet.absoluteFillObject]} />
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

export default NoteInputModal;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
    fontSize: 20,
    color: colors.dark,
  },
  title: {
    height: 40,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  desc: {
    height: 100,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  modalBG: {
    flex: 1,
    zIndex: -1,
    // backgroundColor: 'yellow'
  },
});
