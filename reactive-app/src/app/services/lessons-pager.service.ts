import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Lesson } from '../shared/model/lesson';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http } from '@angular/http';

@Injectable()
export class LessonsPagerService {

  private static readonly PAGE_SIZE = 2;

  private subject = new BehaviorSubject<Lesson[]>([]);
  lessonsPage$: Observable<Lesson[]> = this.subject.asObservable();
  // set public to display outside
  currentPageNumber = 1;
  private courseId: number;

  constructor(private http: Http) { }

  loadFirstPage(courseId: number): Observable<any> {
    console.log('load first page ' + courseId);
    this.courseId = courseId;
    this.currentPageNumber = 1;

    // get first 2 pages
    return this.loadPage(this.currentPageNumber);
  }

  prevPage(): Observable<any> {
    console.log('prev');
    if (this.currentPageNumber - 1 >= 1) {
      this.currentPageNumber -= 1;
    }
    return this.loadPage(this.currentPageNumber);
  }

  nextPage(): Observable<any> {
    console.log('next');
    this.currentPageNumber += 1;
    return this.loadPage(this.currentPageNumber);
  }

  loadPage(pageNumber: number): Observable<any> {
    console.log('load page ' + pageNumber);
    // get 2 pages
    return this.http.get(`/api/lessons`, {
      params: {
        courseId: this.courseId,
        pageNumber: pageNumber,
        pageSize: LessonsPagerService.PAGE_SIZE
      }
    })
    .map(res => res.json().payload)
    .do(lessons => this.subject.next(lessons))
    .publishLast().refCount();
  }
}
