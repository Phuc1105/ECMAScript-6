import {APICaller} from "../Base/APICaller.js";
import API_URL from "../Base/APICaller.js";

export default class Comment extends APICaller {
    constructor() {
        super(API_URL);
    }

    static getAll() {
        const apiCaller = new Comment();
        return apiCaller.get('');
    }

    static getOne(id) {
        const apiCaller = new Comment();
        return apiCaller.get(id);
    }
}