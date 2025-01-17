import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import {NativeStackScreenProps} from '@react-navigation/native-stack'
import ProductItem from '../components/ProductItem'
import Seprator from '../components/Seprator'
import { PRODUCTS_LIST } from '../data/constans'
import {RootStackParamList} from '../App'


type HomeProps = NativeStackScreenProps<RootStackParamList,'Home'>

const Home = ({navigation} : HomeProps) => {
  return (
    <View style={styles.container}>
      <FlatList 
      data={PRODUCTS_LIST}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={Seprator}
      renderItem={({item}) => (
        <Pressable 
        onPress={() => {
            navigation.navigate('Details',{product: item})
        }}
        >
            <ProductItem product={item} />
        </Pressable>
      )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
    
        padding: 12,
        backgroundColor: '#FFFFFF',
      },
})
export default Home
