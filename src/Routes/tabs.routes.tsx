import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Details } from '../Screens/Details'
import { Home } from '../Screens/Home'
import { House } from 'phosphor-react-native'

const { Navigator, Screen } = createBottomTabNavigator()

export function TabRoutes() {
  return (
    <Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#242A32',
          height: 90,
          alignItems: 'center',
          borderTopWidth: 1,
          borderTopColor: '#0296E5'
        },
        headerShown: false,
        tabBarActiveTintColor: '#0296E5',
        tabBarInactiveTintColor: '#67686D',
        tabBarShowLabel: false
      }}
    >
      <Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <House color={color} size={30} weight='light' />
          )
        }} />

      <Screen
        name='Details'
        component={Details}
        options={{
          tabBarButton: () => null
        }} />
    </Navigator>
  )
}
