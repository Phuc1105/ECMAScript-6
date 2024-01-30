import Comment from '../Comment/Comment.js';
import Post from '../Post/Post.js';

let testAPI = async () => {
    try {
        const allGetComment = await Comment.getAll();
        console.log("All get là:", allGetComment.data);

        const oneGetComment = await Comment.getOne(1);
        console.log("One get là:", oneGetComment.data);

        const allPosts = await Post.getAll();
        console.log('All Post là:', allPosts.data);
    
        const onePost = await Post.getOne(1);
        console.log('One Post là:', onePost.data);
    } catch (error) {
        console.error("Lỗi nè", error);  
    }
};


export default testAPI;
