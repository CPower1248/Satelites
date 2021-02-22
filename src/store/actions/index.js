import axios from "axios"

import { Requests as Reqs } from "../requests"

export const FETCH_SATLIST_START = "FETCH_SATLIST_START"
export const FETCH_SATLIST_SUCCESS = "FETCH_SATLIST_SUCCESS"
export const FETCH_SATLIST_FAILURE = "FETCH_SATLIST_FAILURE"

export const FETCH_SATBYNUMBER_START = "FETCH_SATBYNUMBER_START"
export const FETCH_SATBYNUMBER_SUCCESS = "FETCH_SATBYNUMBER_SUCCESS"
export const FETCH_SATBYNUMBER_FAILURE = "FETCH_SATBYNUMBER_FAILURE"

export const getSatList = () => dispatch=> {
    dispatch({type: FETCH_SATLIST_START})

    axios.request(Reqs.satList)
      .then(res => {
        dispatch({type: FETCH_SATLIST_SUCCESS, payload: res.data})
      })
      .catch(err => {
        dispatch({type: FETCH_SATLIST_FAILURE, payload: err.message})
      })
}

export const getSatByNumber = () => dispatch=> {
  dispatch({type: FETCH_SATBYNUMBER_START})

    axios.request(Reqs.satByNumber)
    .then(res => {
      dispatch({type: FETCH_SATBYNUMBER_SUCCESS, payload: res.data})
    })
    .catch(err => {
      dispatch({type: FETCH_SATBYNUMBER_FAILURE, payload: err.message})
    })
}
