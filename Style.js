import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 2,
    justifyContent: 'center',
    paddingHorizontal: 20,
    maxWidth: '90%',
  },
  input: {
    fontSize: 50,
    textAlign: 'right',
    marginBottom: 10,
    color: '#000',
  },
  result: {
    fontSize: 20,
    textAlign: 'right',
    color: '#a9a9a9',
  },
  buttonsContainer: {
    flex: 5,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#670e0a',
    borderColor: '#670e0a',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 80,
    minHeight: 80,
    margin: 10,
    borderRadius: 50,
  },
  zeroButton: {
    flex: 2,
    minWidth: 170,
  },
  buttonText: {
    fontSize: 30,
    color: '#fff',
  },
});

export default styles;
