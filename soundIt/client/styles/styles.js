import { StyleSheet } from 'react-native'

const STYLES = StyleSheet.create({
  pageContainer: {
    flex: 1
  },
  // *******************
  newGroupForm: {
    flex: 0.25,
    backgroundColor: '#ffffe0'
  },
  groupName: {
    flex: 0.6
  },
  button: {
    flex: 0.6,
    justifyContent: 'center',
    color: '#ff4500'
    // backgroundColor: 'orange'
  },
  label: {
    height: 30,
    lineHeight: 30,
    justifyContent: 'center',
    color: '#ff4500'
    // backgroundColor: 'orange'
  },
  inputBox: {
    // height: 50,
    borderColor:'#ff8c00',
    borderBottomColor: '#ff8c00',
    borderWidth: 2,
    borderBottomWidth: 2
  },
  inputLine: {
    color: '#000000'
  },
  usersBody: {
    flex: 0.75
  }
  // *******************
  

  
})

export default STYLES
