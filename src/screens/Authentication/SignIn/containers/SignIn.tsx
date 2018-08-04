import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { RootState } from '../../../../redux/modules'
import { googleSignIn, getGoogleUser } from '../../../../redux/modules/session/asyncActions'

import SignInView from '../components/SignIn'
import IntroLogoView from '../components/IntroLogo'
import IntroLoadingView from '../components/IntroLoading'
import IntroUserControlView from '../components/IntroUserControl'
import IntroSignInControlView from '../components/IntroSignInControl'

type Props = {
    loading: boolean,
    user?: {
        email: string,
        fullName: string,
        profileImage: string,
    },
    googleSignIn(): void,
    getGoogleUser(): void
}

class SignIn extends React.Component<Props> {
    componentDidMount() {
        this.props.getGoogleUser()
    }

    onGoogleSignInPress = () => {
        this.props.googleSignIn()
    }

    render() {
        const {
            loading,
            user,
        } = this.props

        return (
            <SignInView >
                <IntroLogoView />
                <IntroLoadingView
                    animating={loading}
                />
                {user && (
                    <IntroUserControlView
                        email={user.email}
                        fullName={user.fullName}
                        profileImage={user.profileImage}
                    />
                )}
                {!loading && !user && (
                    <IntroSignInControlView
                        onPress={this.onGoogleSignInPress}
                    />
                )}
            </SignInView >
        )
    }
}

export default connect(
    ({ session }: RootState) => ({
        loading: session.loading,
        user: session.user ? {
            email: session.user.email,
            fullName: `${session.user.firstName} ${session.user.lastName}`,
            profileImage: session.user.photo,
        } : undefined,
    }),
    (dispatch) => (
        bindActionCreators({
            googleSignIn,
            getGoogleUser,
        }, dispatch)
    ),
)(SignIn)
