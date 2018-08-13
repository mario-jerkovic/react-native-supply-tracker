import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
    StoreDispatcher,
    StoreState,
} from '../../../../redux'
import { googleSignIn } from '../../../../redux/modules/session/asyncActions'

import SignInViewComponent from '../components/SignInView'
import IntroLogoComponent from '../components/IntroLogo'
import IntroLoadingComponent from '../components/IntroLoading'
import IntroUserControlComponent from '../components/IntroUserControl'
import IntroSignInControlComponent from '../components/IntroSignInControl'

type Props = {
    loading: boolean,
    user?: {
        email: string,
        fullName: string,
        profileImage: string,
    },
    googleSignIn(silently: boolean): void,
}

class SignInContainer extends React.Component<Props> {
    componentDidMount() {
        this.props.googleSignIn(true)
    }

    onGoogleSignInPress = () => {
        this.props.googleSignIn(false)
    }

    render() {
        const {
            loading,
            user,
        } = this.props

        return (
            <SignInViewComponent >
                <IntroLogoComponent />
                <IntroLoadingComponent
                    animating={loading}
                />
                {user && (
                    <IntroUserControlComponent
                        email={user.email}
                        fullName={user.fullName}
                        profileImage={user.profileImage}
                    />
                )}
                {!loading && !user && (
                    <IntroSignInControlComponent
                        onPress={this.onGoogleSignInPress}
                    />
                )}
            </SignInViewComponent >
        )
    }
}

export default connect(
    ({ session }: StoreState) => ({
        loading: session.loading,
        user: session.user ? {
            email: session.user.email,
            fullName: `${session.user.firstName} ${session.user.lastName}`,
            profileImage: session.user.photo,
        } : undefined,
    }),
    (dispatch: StoreDispatcher) => (
        bindActionCreators({
            googleSignIn,
        }, dispatch)
    ),
)(SignInContainer)
