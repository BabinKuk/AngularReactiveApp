import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../shared/model/course';
import { CoursesHttpService } from '../services/courses-http.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;

  constructor(private courseService: CoursesHttpService) { }

  ngOnInit() {
    this.courses$ = this.courseService.findCourses();
  }

}
