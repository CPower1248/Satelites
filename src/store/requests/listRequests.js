import { store } from "../../index"

require("dotenv").config()

const API_KEY = process.env.REACT_APP_API_KEY
const state = store.getState() // =====> IS THIS WORKING??? <=====

export const ListRequests = {
    list_byName: {
      method: 'GET',
      url: 'https://uphere-space1.p.rapidapi.com/satellite/list',
      params: {page: '1', text: state.search.name}, // page required
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'uphere-space1.p.rapidapi.com'
      }
    },
    list_byCountry: {
      method: 'GET',
      url: 'https://uphere-space1.p.rapidapi.com/satellite/list',
      params: {page: '1', country: state.search.country}, // page required
      headers: {
          'x-rapidapi-key': API_KEY,
          'x-rapidapi-host': 'uphere-space1.p.rapidapi.com'
      }
    }
}
