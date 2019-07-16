import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { PostListComponent } from './post-list/post-list.component'
import { PostListItemComponent } from './post-list-item/post-list-item.component'
import { NewPostComponent } from './new-post/new-post.component';
import { PostService } from './services/post.service';
import { ApiWeatherComponent } from './api-weather/api-weather.component'
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  {path: 'posts', component: PostListComponent},
  {path: 'new', component: NewPostComponent},
  {path: '', component: PostListComponent},
  {path: '**', redirectTo: 'posts'}
]

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent,
    ApiWeatherComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
