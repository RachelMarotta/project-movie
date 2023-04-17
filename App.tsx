import { Routes } from './src/Routes'
import { StatusBar } from 'react-native'

export default function App() {
  return (
    <>
      <Routes />
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </>
  )
}