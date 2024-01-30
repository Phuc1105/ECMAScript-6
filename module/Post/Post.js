import { APICaller } from "../Base/APICaller.js";
import API_URL from "../Base/APICaller.js";

const apiCaller = new APICaller(API_URL);

export default class Post {
    static getAll() {
        return apiCaller.get('');
    }

    static getOne(id) {
        return apiCaller.get(id);
    }
}
