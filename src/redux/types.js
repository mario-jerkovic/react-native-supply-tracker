/* eslint-disable no-use-before-define */
// @flow

export type GetState<S> = () => S;
export type PromiseAction<T> = Promise<T>;
export type ThunkAction<A, S> = (dispatch: Dispatch<A, S>, getState: GetState<S>) => any;
export type Dispatch<A, S> = (action: A | ThunkAction<A, S>) => any;
