import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CategoryGridTile = ({
  title,
  color
}: {
  title: string
  color: string
}) => {
  return (
    <View style={styles.outerView}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [
          styles.pressable,
          pressed ? styles.buttonPressed : null
        ]}
      >
        <View style={[styles.innerView, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default CategoryGridTile

const styles = StyleSheet.create({
  outerView: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    backgroundColor: 'white',
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
  },
  pressable: {
    flex: 1
  },
  buttonPressed: {
    opacity: 0.5
  },
  innerView: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18
  }
})
