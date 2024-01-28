export default class APICaller {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    get(endpoint) {
        const apiUrl = `${this.baseUrl}/${endpoint}`;
        return axios.get(apiUrl);
    }
}
