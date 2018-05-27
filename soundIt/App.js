// libraries
import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// AWS Specific
import Amplify from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react-native'
import awsmobile from './aws-exports'

Amplify.configure(awsmobile);

// my modules
import rootReducer from './client/reducers'
import Application from './client/entireApplication'
import WithAuth from './client/auth/withAuth'

class App extends Component {
   
    constructor(props) {
      super(props)
    }

    render() {
      return (
        <Application screenprops={this.props}/>
      )
  }
}

export default WithAuth(App)
