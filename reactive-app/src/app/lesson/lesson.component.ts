import { Component, OnInit, Input } from '@angular/core';
import { Lesson } from '../shared/model/lesson';

@Component({
  selector: 'lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  @Input()
  lesson: Lesson;

  constructor() { }

  ngOnInit() {
  }

}
