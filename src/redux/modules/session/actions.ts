import { createAction, createAsyncAction } from 'typesafe-actions'

import { User } from './types'

export const loadUser = createAsyncAction(
    '@session/USER_REQUEST',
    '@session/USER_SUCCESS',
    '@session/USER_FAILURE',
)<void, User, Error>()

export const loadSession = createAsyncAction(
    '@session/SESSION_REQUEST',
    '@session/SESSION_SUCCESS',
    '@session/SESSION_FAILURE',
)<void, string, Error>()

export const setLoading = createAction('@session/LOADING_SET', (resolve) => (
    (loading: boolean) => resolve({ loading })
))
