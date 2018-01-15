import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Course} from '../shared/model/course';
import {Lesson} from '../shared/model/lesson';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {CoursesService} from '../services/courses.service';

@Injectable()
export class CourseResolver implements Resolve<[Course, (Lesson[])]> {

  constructor(private coursesService: CoursesService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<[Course, (Lesson[])]> {
      console.log('resolve');
      //return null;
      return this.coursesService.getCourseDetails(route.params['id'])
        // use observable from getCourseDetails for next sobservable
        .switchMap(course => this.coursesService.getLessonsForCourse(course.id),
          (course, lessons) => <any>[course, lessons]);
  }
}
