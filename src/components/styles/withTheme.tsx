import * as React from 'react'

import { Theme } from './createTheme'
import { ThemeConsumer } from './themeContext'

export type WithThemeProps = {
    theme: Theme,
}

export default function withTheme<P>(
    WrappedComponent: React.ComponentClass<P & WithThemeProps> | React.SFC<P & WithThemeProps>) {
    return class ThemedComponent extends React.Component<P> {
        public render() {
            return (
                <ThemeConsumer >
                    {(theme) => (
                        <WrappedComponent
                            {...this.props}
                            theme={theme}
                        />
                    )}
                </ThemeConsumer >
            )
        }
    }
}
