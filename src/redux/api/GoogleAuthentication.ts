import {
    GoogleSignin,
    User as GoogleUser,
} from 'react-native-google-signin'

export default class GoogleAuthentication {
    private static readonly defaultScopes = [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/drive.appdata',
    ]

    private static configure() {
        return GoogleSignin.configure({
            scopes: this.defaultScopes,
            forceConsentPrompt: true,
        })
    }

    async signIn() {
        try {
            await GoogleAuthentication.configure()

            const playServices = await GoogleSignin.hasPlayServices({ autoResolve: true })

            if (!playServices) {
                return false
            }

            await GoogleSignin.signIn()

            return true
        } catch (e) {
            return false
        }
    }

    async getUser() {
        try {
            await GoogleAuthentication.configure()

            return await GoogleSignin.currentUserAsync()
        } catch (e) {
            return null
        }
    }
}
