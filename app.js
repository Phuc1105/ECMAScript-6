// bài 1
function demoThis(name) {
    this.name = name;
}
/*this trong js là một từ khóa đặc biệt được sử dụng để tham chiếu đến đối tượng hiện tại trong ngữ cảnh thực thi của một hàm hoặc phương thức. 
Giá trị của this thay đổi tùy thuộc vào cách hàm được gọi.*/
const newObj = new demoThis('Tèo');
console.log('Đít is:', newObj.name); 

//--------------------bài 2------------------
//-------------------------------------------
class Shape {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    move(x, y) {
        this.x = x;
        this.y = y;
    }
}
const testShape = new Shape(1,2);
console.log("Sa pe là:", testShape);

//------------------bài 3--------------------- 
//--------------------------------------------
class Clock {
    constructor({ template }) {
        this.template = template;
        this.timer;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}

let clock = new Clock({ template: 'h:m:s' });
// clock.start();

// -------------------bài 4---------------------
//----------------------------------------------
class Person {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    get fullName() {
        return this._firstName + ' ' + this._lastName;
    }
    get lastName() {
        return this._firstName;
    }
    set lastName(name) {
        this._lastName = name;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(name) {
        this._firstName = name;
    }
}

let person = new Person("Albert", "Einstein");
person.lastName = 'Newton';
person.firstName = 'Isaac'; 

console.log("Tên đầy đủ là:" ,person.fullName); 

//------------------- bài 5---------------------
//----------------------------------------------
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

class Comment extends APICaller {
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

class Post extends APICaller {
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

testAPI();
