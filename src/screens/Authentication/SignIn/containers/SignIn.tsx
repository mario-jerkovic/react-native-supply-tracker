import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUser } from 'src/redux/modules'

import { loadGoogleSession } from 'src/redux/modules/session/asyncActions'
import { StoreDispatcher, StoreState } from 'src/redux/types'

import IntroLoadingComponent from '../components/IntroLoading'
import IntroLogoComponent from '../components/IntroLogo'
import IntroSignInControlComponent from '../components/IntroSignInControl'
import IntroUserControlComponent from '../components/IntroUserControl'
import SignInViewComponent from '../components/SignInView'

type Props = {
    loading: boolean,
    user?: ReturnType<typeof getUser>,
    loadGoogleSession(silently: boolean): void,
}

class SignInContainer extends React.Component<Props> {
    public componentDidMount() {
        this.props.loadGoogleSession(true)
        // this.props.navigation.navigate('App')
    }

    public onGoogleSignInPress = () => {
        this.props.loadGoogleSession(false)
    }

    public render() {
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
    (state: StoreState) => ({
        loading: state.session.loading,
        user: getUser(state),
    }),
    (dispatch: StoreDispatcher) => (
        bindActionCreators({
            loadGoogleSession,
        }, dispatch)
    ),
)(SignInContainer)
