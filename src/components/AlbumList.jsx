import comics from '../data/comics.json'
import React from 'react'
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { Card, Image, Text } from 'react-native-elements'

const AlbumList = ({ navigation }) => {
  navigation.setOptions({
    headerTitle: 'Comics',
    headerTitleAlign: 'center',
  })

  return (
    <View>
      <FlatList
        scrollEnabled
        data={comics}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => {
          return (
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate('Album', { comic: item })}
              >
                <Card title={item.title}>
                  <View>
                    <Image
                      source={{ uri: item.imageUrl }}
                      resizeMode="contain"
                      style={{ height: 250 }}
                    />
                  </View>
                </Card>
              </TouchableOpacity>
            </View>
          )
        }}
      />
    </View>
  )
}

AlbumList.propTypes = {}

export default AlbumList

const styles = StyleSheet.create({})
