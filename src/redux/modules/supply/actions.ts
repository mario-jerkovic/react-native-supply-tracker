import { createAction, createAsyncAction } from 'typesafe-actions'

import { Product } from './models'

export const getSupplies = createAsyncAction(
    '@supplies/GET_SUPPLIES_REQUEST',
    '@supplies/GET_SUPPLIES_SUCCESS',
    '@supplies/GET_SUPPLIES_FAILURE',
)<void, Product[], Error>()

export const saveSupplies = createAsyncAction(
    '@supplies/SAVE_SUPPLIES_REQUEST',
    '@supplies/SAVE_SUPPLIES_SUCCESS',
    '@supplies/SAVE_SUPPLIES_FAILURE',
)<void, void, Error>()

export const setLoading = createAction('@supplies/SET_LOADING', resolve => (
    (loading: boolean) => resolve({ loading })
))
