import { FormikErrors, FormikProps, withFormik } from 'formik'
import * as React from 'react'
import { NavigationScreenProp } from 'react-navigation'
import { connect } from 'react-redux'
import {
    bindActionCreators,
    compose,
} from 'redux'

import { getProductByIdWithLatestSupply } from 'src/redux/modules'
import { updateProductSupply } from 'src/redux/modules/inventory/asyncActions'
import { StoreDispatcher, StoreState } from 'src/redux/types'

import TextField from 'src/components/TextField'

import ProductSellComponent from '../components/ProductSell'
import ProductSellActionsComponent from '../components/ProductSellActions'

type FormValues = {
    aPrice: string,
    tPrice: string,
}

type Props = {
    product: ReturnType<typeof getProductByIdWithLatestSupply>
    updateProductSupply: typeof updateProductSupply,
    navigation: NavigationScreenProp<any, any>,
}

class ProductSellContainer extends React.Component<Props & FormikProps<FormValues>> {

    public static calculateRemainingAmount(price: number, totalPrice: number, amount: number): number {
        return amount - (totalPrice / price)
    }

    private fields = {
        aPriceRef: React.createRef<TextField>(),
        tPriceRef: React.createRef<TextField>(),
    }

    public componentDidMount() {
        this.fields.aPriceRef.current.focus()
    }

    public render() {
        const {
            values,
            errors,
            touched,
            isValid,
            handleBlur,
            handleChange,
            product,
        } = this.props
        const {
            aPriceRef,
            tPriceRef,
        } = this.fields

        let rAmount = product.supply.amount

        if (isValid) {
            rAmount = ProductSellContainer.calculateRemainingAmount(
                parseFloat(values.aPrice),
                parseFloat(values.tPrice),
                rAmount,
            )
        }

        return (
            <ProductSellComponent >
                <TextField
                    ref={aPriceRef}
                    error={touched.aPrice ? errors.aPrice : ''}
                    value={values.aPrice}
                    label="Article price"
                    keyboardType="numeric"
                    // @ts-ignore
                    onBlur={handleBlur('aPrice')}
                    onChangeText={handleChange('aPrice')}
                />
                <TextField
                    ref={tPriceRef}
                    error={touched.tPrice ? errors.tPrice : ''}
                    value={values.tPrice}
                    label="Total price"
                    keyboardType="numeric"
                    // @ts-ignore
                    onBlur={handleBlur('tPrice')}
                    onChangeText={handleChange('tPrice')}
                />
                <TextField
                    disabled={true}
                    value={`${rAmount.toFixed(2)} kg`}
                    label="Remaining amount"
                />
                <ProductSellActionsComponent
                    onCancelPress={this.handleOnCancelPress}
                    onSavePress={this.handleOnSavePres}
                />
            </ProductSellComponent >
        )
    }

    private handleOnCancelPress = () => {
        this.props.navigation.goBack()
    }

    private handleOnSavePres = () => {
        this.fields.tPriceRef.current.blur()

        this.props.handleSubmit()
    }
}

export default compose(
    connect(
        (state: StoreState, ownProps: Props) => ({
            product: getProductByIdWithLatestSupply(ownProps.navigation.getParam('productId'), state),
        }),
        (dispatch: StoreDispatcher) => bindActionCreators({
            updateProductSupply,
        }, dispatch),
    ),
    withFormik<Props, FormValues>({
        mapPropsToValues: () => ({
            aPrice: '',
            tPrice: '',
        }),
        validate: (values: FormValues) => {
            const errors: FormikErrors<FormValues> = {}

            if (!values.aPrice) {
                errors.aPrice = 'Required'
            }

            if (!values.tPrice) {
                errors.tPrice = 'Required'
            }

            return errors
        },

        handleSubmit: async (values, formikBag) => {
            const {
                props,
                resetForm,
            } = formikBag

            const rAmount = ProductSellContainer.calculateRemainingAmount(
                parseFloat(values.aPrice),
                parseFloat(values.tPrice),
                props.product.supply.amount,
            )

            await props.updateProductSupply(props.product.id, rAmount)

            resetForm()
        },
    }),
)(ProductSellContainer)
