import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242A32'
  },
  header: {
    padding: 25
  },
  headerText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 45,
    marginTop: 48
  },
  containerInput: {
    backgroundColor: '#67686D',
    height: 42,
    padding: 10,
    borderRadius: 16,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  input: {
    color: '#FFF',
    width: '80%',
    paddingLeft: 15
  },
  noResultText: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
    marginTop: 20
  }
})
