import * as React from 'react'
import { ViewProps } from 'react-native'

export interface GoogleSigninButtonProps extends ViewProps {
    size?: GoogleSigninButton.Size;
    color?: GoogleSigninButton.Color;

    onPress?(): void;
}

export class GoogleSigninButton extends React.Component<GoogleSigninButtonProps> {
    constructor(props: GoogleSigninButtonProps);
}

export namespace GoogleSigninButton {
    enum Size {
        Standard,
        Wide,
        Icon
    }

    enum Color {
        Light,
        Dark
    }
}

export interface HasPlayServicesParams {
    /**
     * When showPlayServicesUpdateDialog is true, the user will be prompted to install Play
     * Services if on Android and they are not installed.
     */
    showPlayServicesUpdateDialog?: boolean;
}

export interface ConfigureParams {
    /**
     * The Google API scopes to request access to. Default is email and profile.
     */
    scopes?: string[];

    /**
     * iOS client ID from Developer Console. Required for iOS.
     */
    iosClientId?: string;

    /**
     * Web client ID from Developer Console. Required for offline access
     */
    webClientId?: string;

    /**
     * Must be true if you wish to access user APIs on behalf of the user from
     * your own server
     */
    offlineAccess?: boolean;

    /**
     * Specifies a hosted domain restriction
     */
    hostedDomain?: string;

    /**
     * ANDROID ONLY. Specifies if the consent prompt should be shown at each login.
     */
    forceConsentPrompt?: boolean;

    /**
     * ANDROID ONLY. An account name that should be prioritized.
     */
    accountName?: string;
}

export interface User {
    idToken: string | null;
    /**
     * Not null only if a valid webClientId and offlineAccess: true was
     * specified in configure().
     */
    serverAuthCode: string | null;
    /**
     * IOS ONLY. Use getAccessToken() on Android
     */
    accessToken: string;
    user: {
        id: string | null;
        name: string | null;
        email: string | null;
        scopes?: string[];
        photo: string | null;
        familyName: string | null;
        givenName: string | null;
    }
}

export namespace GoogleSignin {
    /**
     * Check if the device has Google Play Services installed
     */
    function hasPlayServices(params?: HasPlayServicesParams): Promise<boolean>;

    /**
     * Configures the library for login. MUST be called before attempting login
     */
    function configure(params?: ConfigureParams): void;

    /**
     * Returns a Promise that resolves with the current signed in user, or null
     * if not signed in.
     */
    function signInSilently(): Promise<User | null>;

    /**
     * Prompts the user to sign in with their Google account. Resolves with the
     * user if successful.
     */
    function signIn(): Promise<User>;

    /**
     * Signs the user out.
     */
    function signOut(): Promise<void>;

    /**
     * Removes your application from the user's authorized applications
     */
    function revokeAccess(): Promise<void>;
}
