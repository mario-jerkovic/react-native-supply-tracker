import * as React from 'react'
import { NavigationScreenProp } from 'react-navigation'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAppLoading, getUser } from 'src/redux/modules'

import { loadProducts } from 'src/redux/modules/inventory/asyncActions'
import { loadGoogleSession } from 'src/redux/modules/session/asyncActions'
import { StoreDispatcher, StoreState } from 'src/redux/types'

import IntroLoadingComponent from '../components/IntroLoading'
import IntroLogoComponent from '../components/IntroLogo'
import IntroSignInControlComponent from '../components/IntroSignInControl'
import IntroUserControlComponent from '../components/IntroUserControl'
import SignInViewComponent from '../components/SignInView'

type Props = {
    loading: ReturnType<typeof getAppLoading>,
    user?: ReturnType<typeof getUser>,
    loadGoogleSession: typeof loadGoogleSession,
    loadProducts: typeof loadProducts,
    navigation: NavigationScreenProp<any, any>,
}

class SignInContainer extends React.Component<Props> {
    public componentDidMount() {
        this.loadSession(true)
    }

    public onGoogleSignInPress = () => {
        this.loadSession(false)
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

    private loadSession = (silently: boolean) => {
        this.props.loadGoogleSession(silently, async () => {
            await this.props.loadProducts()
            this.props.navigation.navigate('App')
        })
    }
}

export default connect(
    (state: StoreState) => ({
        loading: getAppLoading(state),
        user: getUser(state),
    }),
    (dispatch: StoreDispatcher) => (
        bindActionCreators({
            loadGoogleSession,
            loadProducts,
        }, dispatch)
    ),
)(SignInContainer)
