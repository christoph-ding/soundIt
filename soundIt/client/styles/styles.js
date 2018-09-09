import { StyleSheet } from 'react-native'

const STYLES = StyleSheet.create({
  pageContainer: {
    flex: 1
  },
  // *******************
  newGroupForm: {
    flex: 0.25,
    backgroundColor: '#ffdb4d'
  },
  groupName: {
    flex: 0.6
  },
  button: {
    flex: 0.6,
    justifyContent: 'center'
  },
  label: {
    height: 30,
    lineHeight: 30,
    justifyContent: 'center',
    color: '#ff4500'
  },
  inputBox: {
    borderColor:'#ff8c00',
    borderBottomColor: '#ff8c00',
    borderWidth: 2,
    borderBottomWidth: 2,
    backgroundColor: '#fffae6'
  },
  usersBody: {
    flex: 0.75
  }
})

export default STYLES
