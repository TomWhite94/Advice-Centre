export const SET_USER_ID = 'SET_USER_ID'
export const SET_USERNAME = 'SET_USERNAME'
export const IS_LOGGED_IN = 'IS_LOGGED_IN'
export const FETCH_LOGIN = 'FETCH_LOGIN'
export const IS_NOT_LOGGED_IN = 'IS_NOT_LOGGED_IN'

export const setUserId = (userId) => ({
    type: SET_USER_ID,
    userId
})

export const setUsername = (username) => ({
    type: SET_USERNAME,
    username
})

export const fetchLogin = () => {
    

}
