// Access our newly created Mongoose Model
var Post = require('../models/post.model.js')

// Saving the context of this module inside the _the variable
_this = this

// Let's use an Async function to get the To Do List
exports.getPosts = async function(query, page, limit){

    // We also want to set up options for the mongoose paginate

    var options = {
        page,
        limit
    }

    
try {
    var posts = await Post.paginate(query, options)
    


    return posts;

} catch (e) {


    throw Error('Oh No! We got an error while Paginating our Post Tasks, so sorry!' )
}
}

exports.createPost = async function(post){
    
    // Creating a new Mongoose Object by using the new keyword
    
        var newPost = new Post({
            title: todo.title,
            description: todo.description,
            date: new Date(),
        })
    
        try{
    
    
            var savedPost = await newPost.save()
    
            return savedPost;
        }catch(e){
          
            //if we can't create a Post we want to throw an error 
    
            throw Error("Error while Creating Post")
        }
    }

    exports.updatePost = async function(post){
        var id = post.id
    
        try{
        
            var oldPost = await Post.findById(id);
        }catch(e){
            throw Error("Error occured while Finding the Post")
        }

    
        if(!oldPost){
            return false;
        }
    
        console.log(oldPost)
    
    
        oldPost.title = post.title
        oldPost.description = post.description
        oldPost.status = post.status
    
    
        console.log(oldPost)
    
        try{
            var savedPost = await oldPost.save()
            return savedPost;
        }catch(e){
            throw Error("And Error occured while updating the Post");
        }
    }

    exports.deletePost = async function(id){
        
        try{
            var deleted = await Post.deleteOne({_id: id})
            if(deleted.n === 0){
                throw Error("Post Could not be deleted")
            }
            return deleted
        }catch(e){
            throw Error("Error Occured while Deleting the Post")
        }
    }