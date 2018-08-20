import * as React from 'react'
import { TextField } from 'react-native-material-textfield'
import { NavigationScreenProp } from 'react-navigation'
import { connect } from 'react-redux'

import { getProductByIdWithLatestSupply } from 'src/redux/modules'
import { StoreState } from 'src/redux/types'

import ProductComponent from '../components/Product'
import ProductActionsComponent from '../components/ProductActions'

// @TODO
// 1. handle Field errors
// 2. handle tabbing trough fields
// 3. handle returnKeyType
// 4. disable save until all criteria are meet
// 5. TextField wrapper for theme

type Props = {
    product: ReturnType<typeof getProductByIdWithLatestSupply>
    navigation: NavigationScreenProp<any, any>,
}

type State = {
    aPrice: string,
    tPrice: string,
    rAmount: string,
}

class ProductContainer extends React.Component<Props, State> {

    public state: State = {
        aPrice: '',
        tPrice: '',
        rAmount: this.props.product.supply.amount.toFixed(2),
    }

    private fields = {
        aPriceRef: React.createRef<TextField>(),
        tPriceRef: React.createRef<TextField>(),
    }

    public componentDidMount() {
        // @ts-ignore
        this.fields.aPriceRef.current.focus()
    }

    public render() {
        const {
            aPrice,
            tPrice,
            rAmount,
        } = this.state
        const {
            aPriceRef,
            tPriceRef,
        } = this.fields

        return (
            <React.Fragment >
                <ProductComponent >
                    <TextField
                        ref={aPriceRef}
                        value={aPrice}
                        label="Article price"
                        keyboardType="numeric"
                        onChangeText={this.handleArticlePriceChange}
                    />
                    <TextField
                        ref={tPriceRef}
                        value={tPrice}
                        label="Total price"
                        keyboardType="numeric"
                        onChangeText={this.handleTotalPriceChange}
                    />
                    <TextField
                        disabled={true}
                        value={`${rAmount} kg`}
                        label="Remaining amount"
                    />
                </ProductComponent >
                <ProductActionsComponent
                    onCancelPress={this.handleOnCancelPress}
                    onSavePress={this.handleOnSavePress}
                />
            </React.Fragment >
        )
    }

    private calcRemainingAmount() {
        const {
            product,
        } = this.props
        const {
            aPrice,
            tPrice,
        } = this.state

        const aPriceF = parseFloat(aPrice)
        const tPriceF = parseFloat(tPrice)
        let rAmountF = product.supply.amount

        if (!isNaN(aPriceF) && !isNaN(tPriceF)) {
            rAmountF = rAmountF - (tPriceF / aPriceF)
        }

        this.setState(() => ({ rAmount: rAmountF.toFixed(2) }))
    }

    private handleArticlePriceChange = (aPrice: string) => {
        this.setState(() => ({ aPrice }), this.calcRemainingAmount)
    }

    private handleTotalPriceChange = (tPrice: string) => {
        this.setState(() => ({ tPrice }), this.calcRemainingAmount)
    }

    private handleOnCancelPress = () => {
        this.props.navigation.goBack()
    }

    private handleOnSavePress = () => {
        // tslint:disable-next-line:no-console
        console.log('Save', this.state)
    }
}

export default connect(
    (state: StoreState, ownProps: Props) => ({
        product: getProductByIdWithLatestSupply(ownProps.navigation.getParam('productId'), state),
    }),
)(ProductContainer)
