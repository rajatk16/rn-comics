import React from 'react'
import { View, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import { Text, Image } from 'react-native-elements'

const Album = ({ navigation, route }) => {
  const { comic } = route.params
  navigation.setOptions({
    headerTitle: comic.title,
    headerTitleAlign: 'center',
  })
  return (
    <View>
      <Image
        source={{ uri: comic.imageUrl }}
        style={style.imageStyle}
        resizeMode="contain"
      />
      <Text
        style={{
          textAlign: 'center',
          marginTop: 20,
          fontSize: 18,
          fontWeight: 'bold',
        }}
      >
        Price: {comic.price}
      </Text>
      <Text style={style.descriptionStyle}>{comic.description}</Text>
      <View style={style.detailsContainerStyle}>
        <Text style={style.detailTextStyle}>
          Available on: {comic.releaseDate}
        </Text>
        <Text style={style.detailTextStyle}>Series: {comic.series}</Text>
      </View>
      <TouchableOpacity
        style={style.button}
        onPress={() => Linking.openURL(comic.url)}
      >
        <Text style={style.buttonText}>Buy</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Album

const style = StyleSheet.create({
  imageStyle: {
    height: 300,
    marginLeft: 10,
    marginTop: 20,
  },
  descriptionStyle: {
    marginHorizontal: 30,
    marginVertical: 20,
  },
  detailsContainerStyle: {
    marginHorizontal: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailTextStyle: {
    fontSize: 14,
    marginVertical: 5,
  },
  button: {
    marginHorizontal: 50,
    borderRadius: 20,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'green',
    alignSelf: 'stretch',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
})
