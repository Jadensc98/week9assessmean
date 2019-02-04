class Post {
    _id:string;
    title: string;
    description: string;
    date: Date;

    constructor(
        ){
            this.title = ""
            this.description = ""
            this.date = new Date()
        }
}

export default Post;