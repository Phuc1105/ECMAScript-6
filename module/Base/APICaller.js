const API_URL = "http://localhost:3000/comment";

export class APICaller {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    get(endpoint) {
        const apiUrl = `${this.baseUrl}/${endpoint}`;
        return axios.get(apiUrl);
    }
}
export default API_URL;