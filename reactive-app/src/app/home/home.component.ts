import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { Course } from '../shared/model/course';
import { Lesson } from '../shared/model/lesson';
import { CoursesService } from '../services/courses.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  courses$: Observable<Course[]>;
  latestLessons$: Observable<Lesson[]>;

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    console.log('home init');
    this.courses$ = this.coursesService.getCourses();
  }

}
