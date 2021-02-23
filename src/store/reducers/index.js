import { 
    FETCH_SATLIST_START,
    FETCH_SATLIST_SUCCESS,
    FETCH_SATLIST_FAILURE,
    FETCH_SATBYNUMBER_START,
    FETCH_SATBYNUMBER_SUCCESS,
    FETCH_SATBYNUMBER_FAILURE
} from "../actions"

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
    }
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SATLIST_START:
            return ({
                ...state,
                
                isFetchingList: true,
                errorList: ""
            })
        case FETCH_SATLIST_SUCCESS:
            return ({
                ...state,
                isFetchingList: false,
                satList: action.payload
            })
        case FETCH_SATLIST_FAILURE:
            return ({
                ...state,
                isFetchingList: false,
                errorList: action.payload
            })
        case FETCH_SATBYNUMBER_START:
            return ({
                ...state,
                isFetchingCard: true,
                errorCard: ""
            })
        case FETCH_SATBYNUMBER_SUCCESS:
            return ({
                ...state,
                isFetchingCard: false,
                satCard: action.payload
            })
        case FETCH_SATBYNUMBER_FAILURE:
            return ({
                ...state,
                isFetchingCard: false,
                errorCard: action.payload
            })        
        default:
            return state
    }
}
