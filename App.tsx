import { Provider } from 'react-redux';
import { Routes } from './src/Routes'
import { StatusBar } from 'react-native'
import configureStore from './src/State/store';
import { TestOutRoute } from './TestOutRoute';

const store = configureStore()

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
      <TestOutRoute />
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </Provider>
  )
}