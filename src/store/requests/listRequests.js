import { initialState } from "../reducers"
require("dotenv").config()

const API_KEY = process.env.REACT_APP_API_KEY

const stateSearch = initialState.search

export const ListRequests = {
    list_byName: {
      method: 'GET',
      url: 'https://uphere-space1.p.rapidapi.com/satellite/list',
      params: {page: '1', text: stateSearch.name}, // page required
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'uphere-space1.p.rapidapi.com'
      }
    },
    list_byCountry: {
      method: 'GET',
      url: 'https://uphere-space1.p.rapidapi.com/satellite/list',
      params: {page: '1', country: stateSearch.country}, // page required
      headers: {
          'x-rapidapi-key': API_KEY,
          'x-rapidapi-host': 'uphere-space1.p.rapidapi.com'
      }
    }
}
