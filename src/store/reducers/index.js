import { 
    FETCH_SATLIST_START,
    FETCH_SATLIST_SUCCESS,
    FETCH_SATLIST_FAILURE 
} from "../actions"

export const initialState = {
    satList: [],
    isFetching: false,
    error: ""
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SATLIST_START:
            return ({
                ...state,
                isFetching: true,
                error: ""
            })
        case FETCH_SATLIST_SUCCESS:
            return ({
                ...state,
                isFetching: false,
                satList: action.payload
            })
        case FETCH_SATLIST_FAILURE:
            return ({
                ...state,
                isFetching: false,
                error: action.payload
            })
        default:
            return state
    }
}
