require("dotenv").config()

const API_KEY = process.env.REACT_APP_API_KEY

export const Requests = {
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
        url: `https://uphere-space1.p.rapidapi.com/satellite/43226/details`,
        headers: {
          'x-rapidapi-key': API_KEY,
          'x-rapidapi-host': 'uphere-space1.p.rapidapi.com'
        }
    }
}
