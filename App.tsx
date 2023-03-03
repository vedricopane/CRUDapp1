import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Intro from './src/screens/Intro'
import AsyncStorage from '@react-native-async-storage/async-storage';
import NoteScreen from './src/screens/NoteScreen';

const App = () => {

  const [user, setUser] = useState({})

  const findUser = async () => {
    const result = await AsyncStorage.getItem('user')
    // console.log(result)
    if (result !== null) {
      setUser(JSON.parse(result))
    }
  }
  
  useEffect(() => {
    findUser()
    // AsyncStorage.clear()
  }, [])

  if (!user.name) return <Intro onFinish={findUser} />

  return <NoteScreen user={user} />
}

export default App

const styles = StyleSheet.create({})