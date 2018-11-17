// libraries
import React, { Component } from 'react'

// AWS Specific
import Amplify, { API, Auth } from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react-native'
import awsmobile from './aws-exports'

Amplify.configure(awsmobile);

// my modules
import Application from './client/entireApplication'
import WithAuth from './client/auth/withAuth'

console.disableYellowBox = true

class App extends Component {
   
    constructor(props) {
      super(props)
    }
    
    render() {
      return (
        <Application {...this.props}/>
      )
  }
}

export default WithAuth(App)
