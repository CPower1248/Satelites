import axios from "axios"

import { Requests as Reqs } from "../requests"
// import { store } from "../../index"

export const GET_SATLIST_NAME_START = "GET_SATLIST_NAME_START"
export const GET_SATLIST_NAME_SUCCESS = "GET_SATLIST_NAME_SUCCESS"
export const GET_SATLIST_NAME_FAILURE = "GET_SATLIST_NAME_FAILURE"

export const GET_SATLIST_COUNTRY_START = "GET_SATLIST_COUNTRY_START"
export const GET_SATLIST_COUNTRY_SUCCESS = "GET_SATLIST_COUNTRY_SUCCESS"
export const GET_SATLIST_COUNTRY_FAILURE = "GET_SATLIST_COUNTRY_FAILURE"

// const state = store.getState()

export const getSatList_name = (uiName) => dispatch => {
    // console.log("HERE FROM ACTION_START", state)
    dispatch({type: GET_SATLIST_NAME_START, payload: uiName})

    axios.request(Reqs.list_byName)
    .then(res => {
        // console.log("HERE FROM ACTION_SUCCESS", state)
        dispatch({type: GET_SATLIST_NAME_SUCCESS, payload: res.data})
    })
    .catch(err => {
        // console.log("HERE FROM ACTION_FAILURE", state)
        dispatch({type: GET_SATLIST_NAME_FAILURE, payload: err.message})
    })
}

export const getSatList_country = (uiCountry) => dispatch => {
    dispatch({type: GET_SATLIST_COUNTRY_START, payload: uiCountry})

    axios.request(Reqs.list_byCountry)
    .then(res => {
        dispatch({type: GET_SATLIST_COUNTRY_SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({type: GET_SATLIST_COUNTRY_FAILURE, payload: err.message})
    })
}
