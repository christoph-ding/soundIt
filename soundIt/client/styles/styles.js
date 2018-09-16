import { StyleSheet } from 'react-native'

const STYLES = StyleSheet.create({
  pageContainer: {
    flex: 1
  },
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
  },
  prompt: {
    fontSize: 20
  },
  promptBox: {
    flex: 0.3,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  promptBorder: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 13,
    borderColor: '#ff8c00',
    width: 300
  },
  createMessageContainer: {    
    backgroundColor: '#ffdb4d',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom:0,
    height: 75,
    width: '100%'
  }
})

export default STYLES
