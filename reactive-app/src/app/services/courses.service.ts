import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Course } from '../shared/model/course';
import { Lesson } from '../shared/model/lesson';

@Injectable()
export class CoursesService {

  constructor(private http: Http, private db: AngularFireDatabase) { }

  getCourses(): Observable<Course[]> {
    // from firebase
    return this.db.list('courses')
      .first()
      .do(console.log);
  }

  getCourseDetails(courseUrl: string): Observable<Course> {
    // from firebase
    console.log('get course details ' + courseUrl);
    return this.db.list('courses', {
      query: {
        orderByChild: 'url',
        equalTo: courseUrl
      }
    })
    .first()
    .do(console.log)
    .map(data => data[0]);
  }

  getLessonsForCourse(courseId: string): Observable<Lesson[]> {
    console.log('get lessons');
    // from firebase
    return this.db.list('lessons', {
      query: {
        orderByChild: 'courseId',
        equalTo: courseId
      }
    })
    .first()
    .do(console.log);
  }
}
