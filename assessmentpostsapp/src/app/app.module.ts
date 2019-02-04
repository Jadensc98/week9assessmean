import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/post.services';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AllPostsComponent } from './all_posts/all_posts.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HomeComponent,
    AboutComponent,
    AllPostsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
