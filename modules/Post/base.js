import APICaller from "../Base/APICaller";

export default class Post extends APICaller{
    constructor (baseUrl, endpoint){
        super(baseUrl);
        this.endpoint = 'posts';
    }
}