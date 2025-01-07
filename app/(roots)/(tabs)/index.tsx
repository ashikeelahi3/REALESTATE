import { Link } from 'expo-router'
import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Index = () =>{
    return (
      <View style={styles.main}>
        <Text className='font-bold my-10 font-rubik text-3xl'>Welcome to RealState</Text>
        
      </View>
    )
}
  
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
export default Index