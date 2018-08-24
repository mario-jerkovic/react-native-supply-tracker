import { createAction } from 'typesafe-actions'

export const showLoader = createAction(
    '@globalLoader/SHOW_LOADER',
    (resolve) => (message?: string) => resolve({ message }),
)

export const hideLoader = createAction('@globalLoader/HIDE_LOADER')
