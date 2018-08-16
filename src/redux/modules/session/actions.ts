import { createAsyncAction } from 'typesafe-actions'

import { User } from './types'

export const loadSession = createAsyncAction(
    '@session/LOAD_SESSION_REQUEST',
    '@session/LOAD_SESSION_SUCCESS',
    '@session/LOAD_SESSION_FAILURE',
)<void, { accessToken: string, user: User }, Error>()
