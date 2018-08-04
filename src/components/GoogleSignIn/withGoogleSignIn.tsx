import * as React from 'react'
import { GoogleSignin as GoogleSignInApi, User as GoogleUser } from 'react-native-google-signin'

export type InjectedGoogleSignInProps = {
    googleLoading: boolean,
    googleSignIn(): Promise<boolean>,
    googleSignInStatus(): Promise<boolean>,
    googleGetSignInUser(): Promise<GoogleUser | null>,
}

type State = {
    loading: boolean
}

export default function withGoogleSignIn<WrappedProps extends InjectedGoogleSignInProps>(
    WrappedComponent: React.ComponentClass<WrappedProps> | React.StatelessComponent<WrappedProps>,
) {
    class GoogleSignInHOC extends React.Component<WrappedProps, State> {
        static configure() {
            return GoogleSignInApi.configure({
                scopes: ['https://www.googleapis.com/auth/drive.readonly'],
                forceConsentPrompt: true,
            })
        }

        static async currentUserAsync() {
            try {
                await GoogleSignInHOC.configure()

                return await GoogleSignInApi.currentUserAsync()
            } catch (e) {
                return null
            }
        }

        static async signIn() {
            try {
                await GoogleSignInHOC.configure()

                const playService = await GoogleSignInApi.hasPlayServices({ autoResolve: true })

                if (!playService) {
                    return true
                }

                await GoogleSignInApi.signIn()

                return true
            } catch (e) {
                return false
            }
        }

        state = {
            loading: false,
        }

        triggerLoading(loading: boolean) {
            return new Promise(((resolve) => {
                this.setState(() => ({ loading }), () => {
                    resolve()
                })
            }))
        }

        async withLoading<T>(callback: () => T): Promise<T> {
            await this.triggerLoading(true)

            const result = await callback()

            await this.triggerLoading(false)

            return result
        }

        googleSignInStatus = () => (
            this.withLoading(GoogleSignInHOC.currentUserAsync)
                .then(response => !!response)
        )

        googleGetSignInUser = () => (
            this.withLoading(GoogleSignInHOC.currentUserAsync)
        )

        googleSignIn = () => (
            this.withLoading(GoogleSignInHOC.signIn)
        )

        render() {
            const { loading } = this.state

            return (
                <WrappedComponent
                    {...this.props}
                    googleLoading={loading}
                    googleSignIn={this.googleSignIn}
                    googleSignInStatus={this.googleSignInStatus}
                    googleGetSignInUser={this.googleGetSignInUser}
                />
            )
        }
    }

    return GoogleSignInHOC
}
