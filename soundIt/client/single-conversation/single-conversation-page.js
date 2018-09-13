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
      conversation: null
    }
  }

  componentWillMount() {
    const selectedConversation = this.props.navigation.getParam('selected-conversation')
    this.setState({conversation: selectedConversation})
    this.fetchMessages()
  }     

  async makeMessage() {
    console.log('sending message: ')
    
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

  async makeMessageTest() {
    console.log('making a message for S3')  

    let fileData = []

    Recording.init({
      bufferSize: 4096,
      sampleRate: 44100,
      bitsPerChannel: 16,
      channelsPerFrame: 1,
    })
    Recording.addRecordingEventListener((data) => {
      console.log('recording ... ')
      fileData.push(data)
    })

    Recording.start()

    setTimeout(() => {
      console.log('... done')
      Recording.stop()
      console.log('data: ')
      console.log(fileData)
      sendThing()
    }, 2000)

    async function sendThing() {
      console.log('sending thing')

      const formData = new FormData()
      formData.append('file', {
        data: fileData,
        name: 'test.aac',
        type: 'audio/aac',
      })

      await Storage.put('test.mp4', formData, {
        contentType: 'audio/*'
      })
      .then ((result) => {
          console.log('success!')
          console.log(result)
      })
      .catch(err => console.log(err));
    } 
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
    console.log('fetching a single message')
    console.log(message)

    const bucket = 'https://s3.amazonaws.com/soundit-userfiles-mobilehub-1837399535'
    const key = '/public/' + message.MessageID + '.mp3'
    const generatedURL = bucket + key

    console.log(generatedURL)

    const sound = new Sound(generatedURL, null, (error) => {
      if (error) {
        // do something
        console.log('error')
        console.log(error)
      } else {
        console.log('loaded')
        sound.play();
      }      
    });

  }

  async makeMessageOrig() {
    console.log('making a message for S3')

    // we should only submit if it is valid
    const apiName = 'Groups-Users'
    const path = '/messages'
    const messageID = uuidv1() + '.txt'

    // this is contrived user data
    const testGroupID = 'Second Group'
    const testIndividualID = '+01234567891'

    await Storage.put(messageID, 'Yo')
    .then ((result) => {
      console.log('posting to message table')
      console.log(result)
      return new Promise(function(resolve, reject) {
        const newMessage = {
          body: {
            EntityID: testGroupID,
            IndividualID: testIndividualID,
            MessageID: messageID
          }
        }
        API.post(apiName, path, newMessage)
        .then(response => {
          console.log('success:')
          console.log(response)
          resolve()
        })
      })
    })
    .catch(err => console.log(err));
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
          messages={this.state.messages}
          fetchSingleMessage={this.fetchSingleMessage}
        />
        <MakeMessage
          makeMessage={this.makeMessage}
        />
      </View>
    )
  }
}

export default SingleConversationPage
