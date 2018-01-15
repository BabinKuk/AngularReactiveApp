import { Component, OnInit, Input } from '@angular/core';
import { Lesson } from '../shared/model/lesson';

@Component({
  selector: 'lesson-details',
  templateUrl: './lesson-details.component.html',
  styleUrls: ['./lesson-details.component.css']
})
export class LessonDetailsComponent implements OnInit {

  @Input()
  lesson: Lesson;

  constructor() { }

  ngOnInit() {
  }

}
