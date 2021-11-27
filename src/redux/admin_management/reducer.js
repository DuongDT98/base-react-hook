import { Types } from './types'

const initialState = {
    dataAdmin: {
        paging: {},
        rows: [],
    },
}
const homeReducer = (state = initialState, action) => {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case Types.SAVE_LIST_DELETE_ADMIN:
            return {
                ...newState,
                dataAdmin: {
                    ...newState.dataAdmin,
                    rows: action.payload,
                }
            }
        case Types.SAVE_LIST_ADMIN:
            return {
                ...newState,
                dataAdmin: action.payload
            }
        default:
            return { ...newState }
    }
}
export default homeReducer
