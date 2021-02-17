export const Requests = {
    satList: {
        method: 'GET',
        url: 'https://uphere-space1.p.rapidapi.com/satellite/list',
        params: {page: '1'},
        headers: {
          'x-rapidapi-key': 'ed74d09d91msh9d69acf1b669c20p1cfa58jsn12d6606ea31a',
          'x-rapidapi-host': 'uphere-space1.p.rapidapi.com'
        }
    },
    satByNumber: {
        method: 'GET',
        url: `https://uphere-space1.p.rapidapi.com/satellite/43226/details`,
        headers: {
          'x-rapidapi-key': 'ed74d09d91msh9d69acf1b669c20p1cfa58jsn12d6606ea31a',
          'x-rapidapi-host': 'uphere-space1.p.rapidapi.com'
        }
    }
}
