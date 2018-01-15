import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { firebaseConfig } from '../environments/firebase.config';

import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LessonsComponent } from './lessons/lessons.component';
import { UserService } from './services/user.service';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesService } from './services/courses.service';
import { CourseComponent } from './course/course.component';
import { CourseResolver } from './course/course.resolver';
import { CourseHeaderComponent } from './course-header/course-header.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { CoursesHttpService } from './services/courses-http.service';
import { LessonsPagerService } from './services/lessons-pager.service';
import { LessonDetailsComponent } from './lesson-details/lesson-details.component';
import { SafeUrlPipe } from './shared/pipes/safe-url.pipe';
import { MessagesComponent } from './messages/messages.component';
import { MessagesService } from './services/messages.service';
import { LoaderComponent } from './loader/loader.component';
import { LessonComponent } from './lesson/lesson.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    HomeComponent,
    LoginComponent,
    LessonsComponent,
    CoursesListComponent,
    CourseComponent,
    CourseHeaderComponent,
    CoursesComponent,
    CourseDetailComponent,
    LessonsListComponent,
    LessonDetailsComponent,
    SafeUrlPipe,
    MessagesComponent,
    LoaderComponent,
    LessonComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule,
  ],
  providers: [
    UserService,
    CoursesService,
    CoursesHttpService,
    LessonsPagerService,
    MessagesService,
    CourseResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
