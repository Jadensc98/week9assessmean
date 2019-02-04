
import { PostService } from '../services/post.services';
import Post from '../models/post.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(
    //Private todoservice will be injected into the component by Angular Dependency Injector
    private postService: PostService
  ) { }

  //Declaring the new todo Object and initilizing it
  public newPost: Post = new Post()

  //An Empty list for the visible todo list
  postsList: Post[];
  editPosts: Post[] = [];

  ngOnInit(): void {

    //At component initialization the 
    this.postService.getPosts()
      .subscribe(posts => {
        //assign the todolist property to the proper http response
        this.postsList = posts
        console.log(posts)
      })
  }

  //This method will get called on Create button event
  
  create() {
    this.postService.createPost(this.newPost)
      .subscribe((res) => {
        this.postsList.push(res.data)
        this.newPost = new Post()
      })
  }

  editPost(post: Post) {
    console.log(post)
     if(this.postsList.includes(post)){
      if(!this.editPosts.includes(post)){
        this.editPosts.push(post)
      }else{
        this.editPosts.splice(this.editPosts.indexOf(post), 1)
        this.postService.editPost(post).subscribe(res => {
          console.log('Update Succesful')
         }, err => {
            this.editPost(post)
            console.error('Update Unsuccesful')
          })
        }
      }
    }

    submitPost(event, post:Post){
      if(event.keyCode ==13){
        this.editPost(post)
      }
    }

    deletePost(post: Post) {
      this.postService.deletePost(post._id).subscribe(res => {
        this.postsList.splice(this.postsList.indexOf(post), 1);
      })
    }

}
