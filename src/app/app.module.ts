import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import {PostsComponent} from './posts/posts.component';
import {GalleryComponent} from './gallery/gallery.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PostComponent } from './posts/post/post.component';
import { EditModalComponent } from './posts/post/edit-modal/edit-modal.component';
import { CreateModalComponent } from './posts/post/create-modal/create-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    GalleryComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PostComponent,
    EditModalComponent,
    CreateModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
