import * as React from 'react'
import {
    TextField as MaterialTextField,
    TextFieldProps as MaterialTextFieldProps,
} from 'react-native-material-textfield'

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
            <MaterialTextField
                ref={this.textFieldRef}
                {...other}
                tintColor="#2196F3"
                errorColor="#d32f2f"
            />
        )
    }
}

// const TextField: React.SFC<Props & MaterialTextFieldProps> = (props) => {
//     const {
//         textColor,
//         tintColor,
//         baseColor,
//         errorColor,
//         // https://github.com/palantir/tslint/issues/3870
//         // @ts-ignore
//         ...other,
//     } = props
//
//     console.log(props)
//     return (
//         <MaterialTextField
//             {...other}
//             tintColor="#2196F3"
//             errorColor="#d32f2f"
//         />
//     )
// }

export default TextField
