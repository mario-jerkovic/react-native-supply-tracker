import { action, createAction } from 'typesafe-actions'

import { GoogleUser } from './types'
import { LOAD_GOOGLE } from './constants'

export const loadGoogleUser = createAction(LOAD_GOOGLE, (resolve) => (
    (user: GoogleUser) => resolve({
        token: user.accessToken,
        email: user.email,
        firstName: user.givenName,
        lastName: user.familyName,
        photo: user.photo || null,
    })
))

// export function loadGoogleUser(user: GoogleUser) {
//     return action("@user/LOAD_GOOGLE", {
//         token: user.accessToken,
//         email: user.email,
//         firstName: user.givenName,
//         lastName: user.familyName,
//         photo: user.photo || null,
//     })
// }
