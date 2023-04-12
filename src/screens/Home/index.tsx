import { Text, StyleSheet, View, TextInput } from "react-native";

import { styles } from './styles'

export function Home() {

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>O que você quer assistir hoje?</Text>
      <View style={styles.containerInput}>
        <TextInput placeholder='Buscar' />
      </View>
    </View>
  );
}