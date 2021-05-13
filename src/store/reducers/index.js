import * as initial_a from "../actions/index"

import * as list_a from "../actions/listActions"


// Use .env for API_KEY
require("dotenv").config()
const API_KEY = process.env.REACT_APP_API_KEY

export const initialState = {
    satList: [],
    isFetchingList: false,
    errorList: "",
    satCard: {},
    isFetchingCard: false,
    errorCard: "",
    search: {
        number: "",
        name: "",
        country: ""
    },
    hereFromReducer: ""
}

// Do these work?....
const requests = {
    satList: {
        method: 'GET',
        url: 'https://uphere-space1.p.rapidapi.com/satellite/list',
        params: {page: '1'},
        headers: {
          'x-rapidapi-key': API_KEY,
          'x-rapidapi-host': 'uphere-space1.p.rapidapi.com'
        }
    },
    satByNumber: {
        method: 'GET',
        url: `https://uphere-space1.p.rapidapi.com/satellite/25544/details`,
        headers: {
          'x-rapidapi-key': API_KEY,
          'x-rapidapi-host': 'uphere-space1.p.rapidapi.com'
        }
    }
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        // initial_a
        case initial_a.FETCH_SATLIST_START:
            return ({
                ...state,
                isFetchingList: true,
                errorList: ""
            })
        case initial_a.FETCH_SATLIST_SUCCESS:
            return ({
                ...state,
                isFetchingList: false,
                satList: action.payload
            })
        case initial_a.FETCH_SATLIST_FAILURE:
            return ({
                ...state,
                isFetchingList: false,
                errorList: action.payload
            })
        case initial_a.FETCH_SATBYNUMBER_START:
            return ({
                ...state,
                isFetchingCard: true,
                errorCard: ""
            })
        case initial_a.FETCH_SATBYNUMBER_SUCCESS:
            return ({
                ...state,
                isFetchingCard: false,
                satCard: action.payload
            })
        case initial_a.FETCH_SATBYNUMBER_FAILURE:
            return ({
                ...state,
                isFetchingCard: false,
                errorCard: action.payload
            })
        
        // list_actions
        case list_a.GET_SATLIST_NAME_START:
            return ({
                ...state,
                isFetchingList: true,
                errorList: "",
                search: {
                    ...state.search,
                    name: action.payload
                }
            })
        case list_a.GET_SATLIST_NAME_SUCCESS:
            return ({
                ...state,
                isFetchingList: false,
                satList: action.payload
            })
        case list_a.GET_SATLIST_NAME_FAILURE:
            return ({
                ...state,
                isFetchingList: false,
                errorList: action.payload
            })
        case list_a.GET_SATLIST_COUNTRY_START:
            return ({
                ...state,
                hereFromReducer: "hereFromReducer_start",
                isFetchingList: true,
                errorList: "",
                search: {
                    ...state.search,
                    country: action.payload
                }
            })
        case list_a.GET_SATLIST_COUNTRY_SUCCESS:
            return ({
                ...state,
                hereFromReducer: "hereFromReducer_success",
                isFetchingList: false,
                satList: action.payload
            })
        case list_a.GET_SATLIST_COUNTRY_FAILURE:
            return ({
                ...state,
                hereFromReducer: "hereFromReducer_failure",
                isFetchingList: false,
                errorList: action.payload
            })
        // default
        default: return state
    }
}
