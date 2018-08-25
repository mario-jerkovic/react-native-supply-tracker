import * as React from 'react'
import {
    TextField as MaterialTextField,
    TextFieldProps as MaterialTextFieldProps,
} from 'react-native-material-textfield'
import { ThemeConsumer } from 'src/components/styles/themeContext'

type Props = {}

class TextField extends React.PureComponent<Props & MaterialTextFieldProps> {

    private textFieldRef = React.createRef<MaterialTextField>()

    public blur = () => {
        // Blur property doesn't exist in @types
        // @ts-ignore
        this.textFieldRef.current.blur()
    }

    public focus = () => {
        // Focus property doesn't exist in @types
        // @ts-ignore
        this.textFieldRef.current.focus()
    }

    public render() {
        const {
            textColor,
            tintColor,
            baseColor,
            errorColor,
            // https://github.com/palantir/tslint/issues/3870
            // @ts-ignore
            ...other,
        } = this.props

        return (
            <ThemeConsumer>
                {(theme) => (
                    <MaterialTextField
                        ref={this.textFieldRef}
                        {...other}
                        textColor={theme.palette.textPrimary}
                        tintColor={theme.palette.primary}
                        errorColor={theme.palette.error}
                        baseColor={theme.palette.textSecondary}
                    />
                )}
            </ThemeConsumer>
        )
    }
}

export default TextField
