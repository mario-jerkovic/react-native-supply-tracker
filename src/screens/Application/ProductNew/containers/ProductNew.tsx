import { FormikErrors, FormikProps, withFormik } from 'formik'
import * as React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import TextField from 'src/components/TextField/TextField'

import ProductNewComponent from '../components/ProductNew'

type FormValues = {
    name: string,
    amount: string,
}
type Props = {}

class ProductNewContainer extends React.Component<Props & FormikProps<FormValues>> {
    public render() {
        const {
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
        } = this.props

        return (
            <ProductNewComponent >
                <TextField
                    error={touched.name ? errors.name : ''}
                    value={values.name}
                    label="Name"
                    // @ts-ignore
                    onBlur={handleBlur('name')}
                    onChangeText={handleChange('name')}
                />
                <TextField
                    error={touched.amount ? errors.amount : ''}
                    value={values.amount}
                    label="Amount"
                    keyboardType="numeric"
                    // @ts-ignore
                    onBlur={handleBlur('amount')}
                    onChangeText={handleChange('amount')}
                />
            </ProductNewComponent >
        )
    }
}

export default compose(
    connect(),
    withFormik<Props, FormValues>({
        mapPropsToValues: () => ({
            name: '',
            amount: '',
        }),
        validate: (values: FormValues) => {
            const errors: FormikErrors<FormValues> = {}

            if (!values.name) {
                errors.name = 'Required'
            }

            if (!values.amount) {
                errors.amount = 'Required'
            }

            return errors
        },
        handleSubmit: (values) => {
            // tslint:disable-next-line no-console
            console.log(values)
        },
    }),
)(ProductNewContainer)
