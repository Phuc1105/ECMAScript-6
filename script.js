const axios = require('axios');

class APICaller {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    get(endpoint) {
        const apiUrl = `${this.baseUrl}/${endpoint}`;
        return axios.get(apiUrl);
    }
}

class Comment {
    static getAll() {
        const apiCaller = new APICaller("http://localhost:3000/comment");
        return apiCaller.get('');
    }

    static getOne(id) {
        const apiCaller = new APICaller("http://localhost:3000/comment");
        return apiCaller.get(id);
    }
}
class Post {
    static getAll() {
      const apiCaller = new APICaller('http://localhost:3000/comment');
      return apiCaller.get('');
    }
    static getOne(id) {
      const apiCaller = new APICaller('http://localhost:3000/comment');
      return apiCaller.get(id);
    }
  }

let testAPI = async () => {
    try {
        const allGetComment = await Comment.getAll();
        console.log(allGetComment.data);

        const oneGetComment = await Comment.getOne(1);
        console.log(oneGetComment.data);

        const allPosts = await Post.getAll();
        console.log('All Post là:', allPosts);
    
        const onePost = await Post.getOne(1);
        console.log('One Post là:', onePost);
    } catch (error) {
        console.error("Lỗi nè", error);  
    }
};

testAPI();
