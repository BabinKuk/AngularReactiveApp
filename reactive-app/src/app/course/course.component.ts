import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from '../shared/model/course';
import { Lesson } from '../shared/model/lesson';
import { CoursesService } from '../services/courses.service';
import { publishLast } from 'rxjs/operator/publishLast';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  @Input()
  id: number;

  course$: Observable<Course>;
  lessons$: Observable<Lesson[]>;

  details: Lesson;

  course: Course;
  lessons: Lesson[];

  constructor(private route: ActivatedRoute, private coursesService: CoursesService
    //private lessonsPager:LessonsPagerService, private messagesService:MessagesService
    ) { }

  ngOnInit() {
    console.log('course init ' + this.id);
    /*
    this.course$ = this.route.params
      .switchMap(params => this.coursesService.getCourseDetails(params['id']))
      .first()
      .publishLast().refCount();

    this.lessons$ = this.course$
      .switchMap(course => this.coursesService.getLessonsForCourse(course.id))
      .first()
      .publishLast().refCount();
    */
    /*
    this.route.params
    .subscribe(params => {
      const courseUrl = params['id'];
      this.coursesService.getCourseDetails(courseUrl)
        .subscribe(data => {
          this.course = data;
          console.log(this.course);
          this.coursesService.getLessonsForCourse(this.course.id)
            .subscribe(lessons => this.lessons = lessons);
        });
    });
    */
    this.course$ = this.route.data.map(data => data['detail'][0])
      .do((data) => console.log(data));
    this.lessons$ = this.route.data.map(data => data['detail'][1]);
  }

  getLessonDetails(lesson: Lesson) {
    console.log('lesson details...', lesson);
    this.details = lesson;
  }

  backToMaster() {
    console.log('back');
    // hide details
    this.details = undefined;
  }
}
