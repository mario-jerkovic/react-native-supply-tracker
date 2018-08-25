import * as React from 'react'
import {
    NavigationScreenConfigProps,
    NavigationScreenOptions,
} from 'react-navigation'

import StatusBar from 'src/components/StatusBar'
import { Theme } from 'src/components/styles/createTheme'

export default function composeScreen<P>(
    WrappedComponent: React.ComponentClass<P> | React.SFC<P>,
    navigationOptionsCb?: (props: NavigationScreenConfigProps) => NavigationScreenOptions,
) {
    return class ScreenComponent extends React.Component<P> {
        public static navigationOptions(props: NavigationScreenConfigProps): NavigationScreenOptions {
            const theme: Theme = props.screenProps.theme

            let additionalOptions = {}

            if (navigationOptionsCb) {
                additionalOptions = navigationOptionsCb(props)
            }

            return {
                ...additionalOptions,
                headerStyle: {
                    backgroundColor: theme.palette.primary,
                },
                headerTintColor: theme.palette.onPrimary,
            }
        }

        public render() {
            return (
                <React.Fragment >
                    <StatusBar />
                    <WrappedComponent {...this.props} />
                </React.Fragment >
            )
        }
    }
}
