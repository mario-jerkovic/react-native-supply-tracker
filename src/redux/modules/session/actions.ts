import { createAction, createAsyncAction } from 'typesafe-actions'

import { User } from './models'

export const getUser = createAsyncAction(
    '@session/GET_USER_REQUEST',
    '@session/GET_USER_SUCCESS',
    '@session/GET_USER_FAILURE',
)<void, User, Error>()

export const signIn = createAsyncAction(
    '@session/SIGN_IN_REQUEST',
    '@session/SIGN_IN_SUCCESS',
    '@session/SIGN_IN_FAILURE',
)<void, string, Error>()

export const setLoading = createAction('@session/SET_LOADING', resolve => (
    (loading: boolean) => resolve({ loading })
))
