import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { API, Storage } from 'aws-amplify'
import Sound from 'react-native-sound'
const uuidv1 = require('uuid/v1')
import { Buffer } from 'buffer'


import SoundRecorder from 'react-native-sound-recorder'
import RNFetchBlob from 'react-native-fetch-blob';

import STYLES from '../styles/styles' 
import MessagesList from './messages-list'
import ConversationHeader from './conversation-header'
import MakeMessage from './make-message'

class SingleConversationPage extends Component {
  static navigationOptions = {
      header: null
  }

  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      conversation: null, // do we need this?
      prompt: '',
      answered: false
    }
  }

  componentWillMount() {
    const selectedConversation = this.props.navigation.getParam('selected-conversation')
    this.setState({conversation: selectedConversation})
    this.fetchPrompt()
    this.fetchAnswered()
    this.fetchMessages()
  }

  // FETCHING
  fetchData = () => {
    // the order of fetching things ...
    // 1.  get prompt
    // 2.  get answered
    // 3.  get messages
  }

  fetchPrompt() {
    const apiName = 'Groups-Users'
    const path = '/prompt'

    API.get(apiName, path)
    .then(response => {
      let prompt = response.data.Items[0]
      this.setState({prompt: prompt})
    })
    .catch(err => {
      console.log('error:')
      console.log(err)
    });
  }

  fetchAnswered = () => {
    console.log('fetching answered')

    const apiName = 'Groups-Users'
    const path = '/answered'

    // this is contrived user data
    const testUserID = '+01234567891'
    const testGroupID = 'Second Group'

    // for whatever reason, the queryStringParameter attribute
    // in the docs aren't actually supported through the lambda
    // interface, we 'cleverly' put the userID in the headers
    let myInit = {
      'headers': {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'userID': testUserID,
            'groupID': testGroupID
      }
    }

    API.get(apiName, path, myInit)
    .then(response => {
      let answered = response.answered
        this.setState({answered: answered})
    })
    .catch(err => {
      console.log('error:')
      console.log(err)
    });
  }

  fetchMessages = () => {
    // get messages that have this groups id and sort id
    const apiName = 'Groups-Users'
    const path = '/messages'
    // this is contrived user data
    const testGroupID = 'Second Group'

    let myInit = {
      'headers': {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'groupID': testGroupID
      }
    }

    API.get(apiName, path, myInit)
    .then(response => {
      const messages = response.data.Items.map((elem) => {
        return elem            
      })
      this.setState({messages: messages})
    })
    .catch(err => {
      console.log('error:')
      console.log(err)
    });
  }

  fetchSingleMessage = (message) => {
    if (this.state.answered) {
      const bucket = 'https://s3.amazonaws.com/soundit-userfiles-mobilehub-1837399535'
      const key = '/public/' + message.MessageID + '.mp3'
      const generatedURL = bucket + key    

      const sound = new Sound(generatedURL, null, (error) => {
        if (error) {
          // do something
          console.log('error')
          console.log(error)
        } else {
          console.log('loaded')
          // stop playing!
          sound.play();
        }      
      });
    }
  }

  // UPDATE
  updateAnswered = () => {
    const apiName = 'Groups-Users'
    const path = '/groups'
    
    let newGroup = {
      body: {}
    }

    API.post(apiName, path, newGroup)
    .then(response => {
      console.log('success:')
      console.log(response)
    })
     .catch(err => {
      console.log(err)
    })
  }

  async makeMessage() {
    let filePath = SoundRecorder.PATH_CACHE + '/test.mp4'
    console.log(filePath)

    SoundRecorder.start(filePath)
      .then(function() {
        console.log('started recording')
      })

    setTimeout(() => {
      console.log('... done')
      SoundRecorder.stop()
      .then(function(result) {
        console.log('stopped recording, audio file saved at: ' + result.path);        
      })
      .then(function() {
        readFile(filePath)
        .then(async (buffer) => {
          console.log('sending ... ')
          console.log(buffer)
          await Storage.put('test.mp3', buffer, {
            contentType: 'audio/*'
          })
        })
      })
      .catch(e => {
        console.log(e);
      })
    }, 8000)

    function readFile(filePath) {
      return RNFetchBlob.fs.readFile(filePath, 'base64').then(data => new Buffer(data, 'base64'));
    }
  }

  render() {
    const selectedConversation = this.state.conversation
    return (
      <View style={STYLES.pageContainer}>        
        <View style={STYLES.promptBox}>
          <View style={STYLES.promptBorder}>
          <Text style={STYLES.prompt}>
            How was your week?
          </Text>
          </View>        
        </View>
        <MessagesList
          answered={this.state.answered}
          messages={this.state.messages}
          fetchSingleMessage={this.fetchSingleMessage}
        />
        <View style={STYLES.createMessageContainer}>
          <MakeMessage
            makeMessage={this.makeMessage}
          />
        </View>
      </View>
    )
  }
}

export default SingleConversationPage
