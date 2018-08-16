import { createAsyncAction } from 'typesafe-actions'

import { Product } from './types'

export const loadProducts = createAsyncAction(
    '@products/LOAD_PRODUCTS_REQUEST',
    '@products/LOAD_PRODUCTS_SUCCESS',
    '@products/LOAD_PRODUCTS_FAILURE',
)<void, Product[], Error>()
