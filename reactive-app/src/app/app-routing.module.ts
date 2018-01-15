import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LessonsComponent} from './lessons/lessons.component';
import { CourseComponent } from './course/course.component';
import { CourseResolver } from './course/course.resolver';
import { CourseHeaderComponent } from './course-header/course-header.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'lessons',
    component: LessonsComponent
  },
  {
    path: 'api/courses',
    component: CoursesComponent
  },
  {
    path: 'courses/:id',
    component: CourseComponent,
    resolve: {
        detail: CourseResolver
    }
  },
  {
    path: 'api/courses/:id',
    component: CourseDetailComponent
  },
  /*{
      path: 'lesson/new',
      component: CreateLessonComponent
  }, */
  {
      path: '',
      pathMatch: 'full',
      redirectTo: '/home'
  },
  {
      path: '**',
      pathMatch: 'full',
      redirectTo: '/home'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {

}
