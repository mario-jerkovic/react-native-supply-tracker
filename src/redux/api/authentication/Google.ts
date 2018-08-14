import { GoogleSignin } from 'react-native-google-signin'

import { AuthenticationApi } from './type'

export default class Google implements AuthenticationApi {
    private static readonly defaultScopes = [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/drive.appdata',
        'https://www.googleapis.com/auth/drive.scripts',
        'https://www.googleapis.com/auth/drive.metadata',
    ]

    constructor() {
        GoogleSignin.configure({
            scopes: Google.defaultScopes,
            offlineAccess: false,
            forceConsentPrompt: true,
        })
    }

    async signIn(silently: boolean) {
        try {
            await GoogleSignin.hasPlayServices()

            const userInfo = silently ?
                await GoogleSignin.signInSilently() :
                await GoogleSignin.signIn()

            if (!userInfo) {
                return null
            }

            return userInfo.accessToken
        } catch (error) {
            console.log('Error: signIn @TODO', error, error.code)
            return null
        }
    }

    async signOut() {
        try {
            await GoogleSignin.revokeAccess()
            await GoogleSignin.signOut()
        } catch (error) {
            console.log('Error: signOut @TODO', error)
        }
    }

    async getCurrentUser() {
        try {
            const userInfo = await GoogleSignin.signInSilently()

            if (!userInfo) {
                return null
            }

            return {
                id: userInfo.user.id,
                email: userInfo.user.email,
                firstName: userInfo.user.givenName,
                lastName: userInfo.user.familyName,
                photo: userInfo.user.photo,
            }
        } catch (error) {
            console.log('Error: getCurrentUser @TODO', error)
            return null
        }
    }
}
