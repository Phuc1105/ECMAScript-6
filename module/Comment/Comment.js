import APICaller from "../Base/APICaller.js";

export default class Comment extends APICaller {
    constructor() {
        super("http://localhost:3000/comment");
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