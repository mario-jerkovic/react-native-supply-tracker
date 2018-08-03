// @flow

type LogInUserSuccess = { type: 'LOGIN_USER_SUCCESS', payload: { user: User } }

type Action =
  | LogInUserSuccess

type User = {
  +token: string,
  +email: string,
  +firstName: string,
  +lastName: string,
  +photo: ?string,
}

export type State = {
  +user: ?User,
}

const initialState: State = {
  user: null,
}

export default function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case 'LOGIN_USER_SUCCESS':
      return {
        ...state,
        user: action.payload.user,
      }
    default:
      return state
  }
}

export function mapGoogleUserToState(rawUser: Object): User {
  return {
    token: rawUser.accessToken,
    email: rawUser.email,
    firstName: rawUser.givenName,
    lastName: rawUser.familyName,
    photo: rawUser.photo,
  }
}

export function signInUser(user: Object): LogInUserSuccess {
  return {
    type: 'LOGIN_USER_SUCCESS',
    payload: { user },
  }
}
