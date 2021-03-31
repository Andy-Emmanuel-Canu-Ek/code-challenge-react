import { types } from "../types/types";

export const authLogin = ( user ) => ({
    type: types.login,
    payload: user
});

export const authLogout = () => ({ type: types.logout })
export const authCheckingFinish = () => ({ type: types.authCheckingFinish })
