import {
    REGISTER_SUCCESS,
    RESET_REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    AUTH_SUCCESS,
    AUTH_FAIL,
    REFRESH_SUCCESS,
    REFRESH_FAIL,
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
} from './types';
import axios from "axios";

// // updates "user" in store to current user info
// export const load_user = () => async dispatch => {
//     return axios.get('/api/account/user').then((response) => {
//         if (response.status === 200) {
//             dispatch({type: LOAD_USER_SUCCESS, payload: response.data});
//         } else {
//             dispatch({type: LOAD_USER_FAIL});
//         }
//     }).catch((err) => {
//         dispatch({type: LOAD_USER_FAIL});
//     })
// }
//
// // Checks if jwt token cookies are valid
// export const check_auth_status = () => async dispatch => {
//
//     return axios.get('/api/account/verify')
//         .then((response) => {
//             if (response.status === 200) {
//                 dispatch({type: AUTH_SUCCESS});
//                 dispatch(load_user());
//             } else {
//                 dispatch({type: AUTH_FAIL});
//                 dispatch({type: REMOVE_SELECTED_ORG});
//             }
//         }).catch((err) => {
//             dispatch({type: AUTH_FAIL});
//             dispatch({type: REMOVE_SELECTED_ORG});
//         })
// }
//
// export const request_refresh = () => async dispatch => {
//
//     return axios.get('/api/account/refresh')
//         .then((response) => {
//             if (response.status === 200) {
//                 dispatch({type: REFRESH_SUCCESS});
//                 dispatch(check_auth_status());
//             } else {
//                 dispatch({type: REFRESH_FAIL});
//                 dispatch({type: AUTH_FAIL});
//                 dispatch({type: REMOVE_SELECTED_ORG});
//             }
//         }).catch((err) => {
//             dispatch({type: REFRESH_FAIL});
//             dispatch({type: AUTH_FAIL});
//             dispatch({type: REMOVE_SELECTED_ORG});
//         });
// }
//
// export const register = (values) => async dispatch => {
//     const body = JSON.stringify(values)
//
//     try {
//         const response = await fetch('/api/account/register', {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//             },
//             body: body
//         });
//
//         if (response.status === 201) {
//             dispatch({type: REGISTER_SUCCESS});
//         } else {
//             dispatch({type: REGISTER_FAIL});
//         }
//     } catch(err) {
//         dispatch({type: REGISTER_FAIL});
//     }
// }
//
// export const reset_register_success = () => dispatch => {
//     dispatch({type: RESET_REGISTER_SUCCESS})
// };
//
// export const login = (values, setError, setSubmitting) => async dispatch => {
//     const body = values;
//
//     dispatch({type: SET_AUTH_LOADING})
//
//     axios.post('/api/account/login', body)
//         .then((response) => {
//             if (response.status === 200) {
//                 setError(false);
//                 dispatch({type: LOGIN_SUCCESS});
//                 dispatch(load_user());
//             } else {
//                 setError(true)
//                 setSubmitting(false);
//                 dispatch({type: LOGIN_FAIL});
//             }
//             dispatch({type: REMOVE_AUTH_LOADING})
//         }).catch((err) => {
//         setError(true)
//         setSubmitting(false);
//         dispatch({type: LOGIN_FAIL})
//         dispatch({type: REMOVE_AUTH_LOADING})
//     })
//
//
// };
//
// export const logout = () => async dispatch => {
//     axios.post('/api/account/logout')
//         .then((response) => {
//             if (response.status === 200) {
//                 dispatch({type: LOGOUT_SUCCESS});
//                 dispatch({type: REMOVE_SELECTED_ORG});
//             } else {
//                 dispatch({type: LOGOUT_FAIL});
//             }
//         }).catch((err) => {
//         dispatch({type: LOGOUT_FAIL});
//     })
// };


