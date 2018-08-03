// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import type { Dispatch } from 'redux'
import { bindActionCreators } from 'redux'

import type { AppState } from '../../../../redux/modules'
import {
  signInUser,
  mapGoogleUserToState,
} from '../../../../redux/modules/auth'

import { withGoogleSignIn } from '../../../../components/GoogleSignIn'

import SignInView from '../components/SignIn'
import IntroLogoView from '../components/IntroLogo'
import IntroLoadingView from '../components/IntroLoading'
import IntroUserControlView from '../components/IntroUserControl'
import IntroSignInControlView from '../components/IntroSignInControl'

type Props = {
  user?: {
    email: string,
    fullName: string,
    profileImage: string,
  },
}

class SignIn extends React.Component<Props, void> {
  static defaultProps = {
    user: undefined,
  }

  async componentDidMount() {
    const googleUser = await this.props.googleSignedInUser()

    if (!googleUser) {
      return
    }

    // Save to redux state
    console.log('@TODO ComponentMount ', googleUser)
    this.props.signInUser(mapGoogleUserToState(googleUser))
  }

  onGoogleSignInPress = async () => {
    const googleUser = await this.props.googleSignIn()

    if (!googleUser) {
      return
    }

    // Save to redux state
    console.log('@TODO SignInPress ', googleUser)
    this.props.signInUser(mapGoogleUserToState(googleUser))
  }

  render() {
    const {
      user,
      googleLoading,
    } = this.props

    return (
      <SignInView >
        <IntroLogoView />
        <IntroLoadingView
          animating={googleLoading}
        />
        {user && (
          <IntroUserControlView
            email={user.email}
            fullName={user.fullName}
            profileImage={user.profileImage}
          />
        )}
        {!googleLoading && !user && (
          <IntroSignInControlView
            onPress={this.onGoogleSignInPress}
          />
        )}
      </SignInView >
    )
  }
}

export default connect(
  ({ auth }: AppState) => ({
    user: auth.user ? {
      email: auth.user.email,
      fullName: `${auth.user.firstName} ${auth.user.lastName}`,
      profileImage: auth.user.photo,
    } : undefined,
  }),
  (dispatch: Dispatch<*>) => bindActionCreators({
    signInUser,
  }, dispatch),
)(withGoogleSignIn(SignIn))
