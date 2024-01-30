import {APICaller} from "../Base/APICaller.js";
import API_URL from "../Base/APICaller.js";

export default class Post extends APICaller {
    constructor() {
        super(API_URL);
    }

    static getAll() {
        const apiCaller = new Post();
        return apiCaller.get('');
    }

    static getOne(id) {
        const apiCaller = new Post();
        return apiCaller.get(id);
    }
}