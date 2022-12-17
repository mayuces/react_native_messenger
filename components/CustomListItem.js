import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Avatar } from '@rneui/base'

const CustomListItem = () => {
  return (
    <ListItem>
      <Avatar 
        rounded
        source={{
          uri:'https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg'
        }}
      />
      
    </ListItem>
  )
}

export default CustomListItem

const styles = StyleSheet.create({})