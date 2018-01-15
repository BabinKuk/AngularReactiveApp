import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Course } from '../shared/model/course';
import { Lesson } from '../shared/model/lesson';

@Injectable()
export class CoursesHttpService {

  constructor(private http: Http) { }

  findCourses(): Observable<Course[]> {
    // local rest api
    console.log('find courses service...');
    return this.http.get('/api/courses')
      .map(res => res.json().payload)
      .do(console.log);
  }

  findCourseById(courseId: number): Observable<Course> {
    // local rest api
    console.log('finding course by id ' + courseId);
    return this.http.get(`/api/courses/${courseId}`)
      .do(res => console.log('course', res.json()))
      .map(res => res.json());
  }

  findLessonDetailById(lessonId): Observable<Lesson> {
    // local rest api
    return this.http.get(`/api/lessons/${lessonId}`)
    .map(res => res.json())
    .do(console.log);
  }

}
