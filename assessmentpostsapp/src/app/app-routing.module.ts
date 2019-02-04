import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PostComponent} from "./post/post.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {AllPostsComponent} from "./all_posts/all_posts.component";

const routes: Routes = [
  {path: '', redirectTo: "/home", pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'posts', component: PostComponent },
  {path: 'about', component: AboutComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'all_posts', component: AllPostsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

