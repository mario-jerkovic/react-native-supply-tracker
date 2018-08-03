/* eslint-disable no-undef */
// @flow
import * as React from 'react'
import { GoogleSignin as GoogleSignInApi } from 'react-native-google-signin'

export type User = {
  accessToken: string,
  email: string,
  familyName: string,
  givenName: string,
  photo?: string,
}

export type InjectedProps = {
  googleLoading: boolean | void,
  googleSignIn: (() => Promise<User | null>) | void,
  googleSignedInUser: (() => Promise<User | null>) | void
}

type State = {
  loading: boolean
}

export default function withGoogleSignIn<Props: {}>(
  Component: React.ComponentType<Props>,
): React.ComponentType<$Diff<Props, InjectedProps>> {
  class GoogleSignInHOC extends React.Component<Props, State> {
    state = {
      loading: false,
    }

    configureGoogleSignInApi(): Promise<void> {
      return GoogleSignInApi.configure({
        scopes: ['https://www.googleapis.com/auth/drive.readonly'],
        forceConsentPrompt: true,
      })
    }


    googleSignedInUser = (): Promise<User | null> => (
      new Promise((resolve) => {
        this.setState(() => ({ loading: true }), async () => {
          await this.configureGoogleSignInApi()

          resolve(await GoogleSignInApi.currentUserAsync())

          this.setState(() => ({ loading: false }))
        })
      })
    )

    googleSignIn = async (): Promise<User | null> => (
      new Promise((resolve) => {
        this.setState(() => ({ loading: true }), async () => {
          await this.configureGoogleSignInApi()

          await GoogleSignInApi.hasPlayServices({ autoResolve: true })

          resolve(await GoogleSignInApi.signIn())

          this.setState(() => ({ loading: false }))
        })
      })
    )

    render() {
      const { loading } = this.state

      return (
        <Component
          {...this.props}
          googleLoading={loading}
          googleSignIn={this.googleSignIn}
          googleSignedInUser={this.googleSignedInUser}
        />
      )
    }
  }

  return GoogleSignInHOC
}
