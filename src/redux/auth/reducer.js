import { Types } from './types'

const initialState = {
    token: null,
    infoUser: null,
    listUserLoginPermission: []
}
const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.SAVE_INFO_USER:
            return {
                ...state,
                infoUser: action.payload
            }
        case Types.SAVE_LOGIN:
            return {
                ...state,
                token: action.payload
            }
        case Types.SAVE_LIST_USER_LOGIN_PERMISSION:
            return {
                ...state,
                listUserLoginPermission: action.payload
            }
        default:
            return { ...state }
    }
}
export default homeReducer
