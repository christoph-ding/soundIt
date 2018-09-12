import { StyleSheet } from 'react-native'

const STYLES = StyleSheet.create({
  pageContainer: {
    flex: 1
  },
  // *******************
  newGroupForm: {
    paddingTop: 25, 
    flex: 0.2,
    backgroundColor: '#ffdb4d'
  },
  groupName: {
    flex: 0.4
  },
  button: {
    flex: 0.25,
    justifyContent: 'center'
  },
  inputBox: {
    borderColor:'#ff8c00',
    borderBottomColor: '#ff8c00',
    borderWidth: 2,
    borderBottomWidth: 2,
    backgroundColor: '#fffae6',
  },
  usersBody: {
    flex: 0.8
  }
})

export default STYLES
