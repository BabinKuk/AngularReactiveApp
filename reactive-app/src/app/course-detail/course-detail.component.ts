import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../shared/model/course';
import { Observable } from 'rxjs';
import { CoursesHttpService } from '../services/courses-http.service';
import { ActivatedRoute } from '@angular/router';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { LessonsPagerService } from '../services/lessons-pager.service';
import { Lesson } from '../shared/model/lesson';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit, OnDestroy {

  // @Input()
  id: number;

  course$: Observable<Course>;
  lessons$: Observable<Lesson[]>;
  detail$: Observable<Lesson>;

  constructor(private route: ActivatedRoute,
              private coursesService: CoursesHttpService,
              private lessonsPager: LessonsPagerService,
              private messagesService: MessagesService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.id = params['id'];
      }
    });

    // this.course$ = this.courseService.findCourseById(params['id']);
    this.course$ = this.route.params
      .switchMap(params => this.coursesService.findCourseById(params['id']))
      //.first()
      //.publishLast().refCount()
      ;

    this.lessons$ = this.lessonsPager.lessonsPage$;
    this.lessonsPager.loadFirstPage(this.id)
      .subscribe(
        () => {}, // all ok
        //err => alert('error loading first page')
        //using messages service
        err => this.messagesService.error('Error loading first page')
      );
  }

  prevLessonPage() {
    console.log('prev');
    this.lessonsPager.prevPage()
      .subscribe(
        () => {}, // all ok
        //err => alert('error loading prev page')
        //using messages service
        err => this.messagesService.error('Error loading prev page')
      );
  }

  nextLessonPage() {
    console.log('next');
    this.lessonsPager.nextPage()
      .subscribe(
        () => {}, // all ok
        //err => alert('error loading next page')
        //using messages service
        err => this.messagesService.error('Error loading next page')
      );
  }

  backToMaster() {
    console.log('back');
    // hide details
    this.detail$ = undefined;
  }

  getLessonDetails(lesson: Lesson) {
    console.log('lesson details...', lesson);
    this.detail$ = this.coursesService.findLessonDetailById(lesson.url);
  }

  ngOnDestroy(): void {
    console.log('Method not implemented.');
  }

}
