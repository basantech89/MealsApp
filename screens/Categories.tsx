import {
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
  StyleSheet
} from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/dummy-data'
import Category from '../models/category'
import CategoryGridTile from '../components/CategoryGridTile'

const RenderCategory = (data: ListRenderItemInfo<Category>) => (
  <CategoryGridTile title={data.item.title} color={data.item.color} />
)

const Categories = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={RenderCategory}
      numColumns={2}
    />
  )
}

export default Categories

const styles = StyleSheet.create({})
