import React from 'react'

import Categories from './screens/Categories'
import { SafeAreaView } from 'react-native'

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{ backgroundColor: '#24180f' }}>
      <Categories />
    </SafeAreaView>
  )
}

export default App
