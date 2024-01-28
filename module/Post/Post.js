import APICaller from "../Base/APICaller.js";

export default class Post extends APICaller {
    constructor() {
        super('http://localhost:3000/comment');
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