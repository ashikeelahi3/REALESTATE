import { Link } from 'expo-router'
import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Index = () =>{
    return (
      <View style={styles.main}>
        <Link href="/SignIn">Sign In</Link>
        <Link href="/explore">Explore</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/properties/1">Property</Link>
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