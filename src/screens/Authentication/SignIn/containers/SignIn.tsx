import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { RootState } from '../../../../redux/modules'
import { loadGoogleUser } from '../../../../redux/modules/user/actions'

import { withGoogleSignIn, InjectedGoogleSignInProps } from '../../../../components/GoogleSignIn'

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
    loadGoogleUser(user: object): any
} & InjectedGoogleSignInProps

class SignIn extends React.Component<Props> {
    async componentDidMount() {
        const isSignedIn = await this.props.googleSignInStatus()

        if (!isSignedIn) {
            return
        }

        this.props.loadGoogleUser(await this.props.googleGetSignInUser())
    }

    onGoogleSignInPress = async () => {
        const isSignedIn = await this.props.googleSignIn()

        if (!isSignedIn) {
            return
        }

        this.props.loadGoogleUser(await this.props.googleGetSignInUser())
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
    ({ user }: RootState) => ({
        user: user ? {
            email: user.email,
            fullName: `${user.firstName} ${user.lastName}`,
            profileImage: user.photo,
        } : null,
    }),
    (dispatch) => (
        bindActionCreators({
            loadGoogleUser,
        }, dispatch)
    ),
)(withGoogleSignIn(SignIn))
