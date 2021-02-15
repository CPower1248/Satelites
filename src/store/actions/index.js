import axios from "axios"

export const FETCH_SATLIST_START = "FETCH_SATLIST_START"
export const FETCH_SATLIST_SUCCESS = "FETCH_SATLIST_SUCCESS"
export const FETCH_SATLIST_FAILURE = "FETCH_SATLIST_FAILURE"

const options = {
    method: 'GET',
    url: 'https://uphere-space1.p.rapidapi.com/satellite/list',
    params: {page: '1'},
    headers: {
      'x-rapidapi-key': 'ed74d09d91msh9d69acf1b669c20p1cfa58jsn12d6606ea31a',
      'x-rapidapi-host': 'uphere-space1.p.rapidapi.com'
    }
};

export const getSatList = () => dispatch=> {
    dispatch({type: FETCH_SATLIST_START})

    axios.request(options)
    .then(res => {
      dispatch({type: FETCH_SATLIST_SUCCESS, payload: res.data})
    })
    .catch(err => {
      dispatch({type: FETCH_SATLIST_FAILURE, payload: err.message})
    })    
}
