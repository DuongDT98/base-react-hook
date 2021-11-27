import { fetchApi } from "../../app/lib/api"
import { Types } from './types'
import { actionLoading } from '../home/actions'
import { checkErrorCode } from '../auth/actions'

/////////////////////////////List Admin////////////////////////////////////////////////
export const actionGetListAdmins = (payload) => async (dispatch, getState) => {
    try {
        dispatch(actionLoading(true))
        const { page } = payload
        let response = await fetchApi(`/admin/user`, "get", payload)
        if (response.code !== 200) {
            dispatch(actionLoading(false))
            return checkErrorCode(response?.code, response?.message)
        }
        response.data = {
            ...response.data,
            paging: {
                page: page || 1,
                count: response.data.count,
                limit: Math.ceil((response.data.count) / 20)
            }
        }
        await dispatch(actionSaveListAdmins(response.data))
        dispatch(actionLoading(false))
        return response.data
    } catch (error) {
        alert(error || error?.message)
    }
}

export const actionSaveListAdmins = (payload) => ({
    type: Types.SAVE_LIST_ADMIN,
    payload,
})
/////////////////////////////End List Admin////////////////////////////////////////////////

/////////////////////////////Get Admin By Id && Edit////////////////////////////////////////////////
export const actionGetAdminById = (payload) => async (dispatch, getState) => {
    try {
        dispatch(actionLoading(true))
        let response = await fetchApi(`/admin/user/get-user-by-id/${payload?.id}`, "get")
        if (response.code !== 200) {
            dispatch(actionLoading(false))
            return checkErrorCode(response?.code, response?.message)
        }
        dispatch(actionLoading(false))
        return response.data
    } catch (error) {
        alert(error || error?.message)
    }
}

export const actionUpdateAdmin = (payload) => async (dispatch, getState) => {
    try {
        dispatch(actionLoading(true))
        let response = await fetchApi(`/admin/user/update`, "post", { user: payload })
        if (response.code !== 200) {
            dispatch(actionLoading(false))
            return checkErrorCode(response?.code, response?.message)
        }
        dispatch(actionLoading(false))
        return response
    } catch (error) {
        alert(error || error?.message)
    }
}
/////////////////////////////End Get Admin By Id////////////////////////////////////////////////


/////////////////////////////Delete Admin////////////////////////////////////////////////
export const actionDeleteAdmin = (payload) => async (dispatch, getState) => {
    try {
        dispatch(actionLoading(true))
        let response = await fetchApi(`/admin/user/delete`, "get", { user_id: payload?.id })
        if (response.code !== 200) {
            dispatch(actionLoading(false))
            return checkErrorCode(response?.code, response?.message)
        }
        dispatch(actionLoading(false))
        return response
    } catch (error) {
        alert(error || error?.message)
    }
}

export const actionSaveListDeleteAdmin = (payload) => ({
    type: Types.SAVE_LIST_DELETE_ADMIN,
    payload,
})
/////////////////////////////End Delete Admin////////////////////////////////////////////////


/////////////////////////////CreateAdmin////////////////////////////////////////////////
export const actionCreateAdmin = (payload) => async () => {
    try {
        const response = await fetchApi(`/admin/user/create`, "post", payload)
        if (response?.code !== 200) {
            dispatch(actionLoading(false))
            return checkErrorCode(response?.code, response?.message)
        }
        return response
    } catch (error) {
        alert(error || error?.message)
    }
}
/////////////////////////////End CreateAdmin////////////////////////////////////////////////