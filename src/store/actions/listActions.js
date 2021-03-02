import axios from "axios"

import { Requests as Reqs } from "../requests"

export const GET_SATLIST_NAME_START = "GET_SATLIST_NAME_START"
export const GET_SATLIST_NAME_SUCCESS = "GET_SATLIST_SU_NAMECCESS"
export const GET_SATLIST_NAME_FAILURE = "GET_SATLIST_FAI_NAMELURE"

export const getSatList_name = () => dispatch => {
    dispatch({type: GET_SATLIST_NAME_START})

    axios.request(Reqs.list_byName)
    .then(res => {
        dispatch({type: GET_SATLIST_NAME_SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({type: GET_SATLIST_NAME_FAILURE, payload: err.message})
    })
}
