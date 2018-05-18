// libraries
import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// AWS Specific
import Amplify from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react-native'
import {awsmobile} from './aws-exports'

Amplify.configure(awsmobile);
// Amplify.configure({
//   Auth: {
//     identityPoolId: 'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab',
//             region: 'XX-XXXX-X',
//             UserPoolId: 'us-east-1_iOUZkQm0h',
//             identityPoolId: 'us-east-1:024789030710:userpool/us-east-1_iOUZkQm0h'
//   }
// });

// my modules
import rootReducer from './client/reducers'
import Application from './client/entireApplication'
import WithAuth from './client/auth/withAuth'

class App extends Component {
   
    constructor(props) {
      super(props)
    }

    render() {
      console.log('inside app:')
      console.log(this.props)
      return (
        <Application screenprops={this.props}/>
      )
  }
}

export default WithAuth(App)
