import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Lesson } from '../shared/model/lesson';

@Component({
  selector: 'lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

  @Input()
  lessons: Lesson[];

  @Output()
  selected = new EventEmitter<Lesson>();

  selectedLesson: Lesson;

  constructor() { }

  ngOnInit() {
  }

  select(lesson: Lesson) {
    console.log('lesson selected', lesson);
    // this.details = !this.details;
    this.selectedLesson = lesson;
  }

  isSelected(lesson: Lesson): boolean {
    //console.log('isSelected ' + lesson.description);
    if (!this.selectedLesson) {
      // console.log('not current', false);
      return false;
    }
    //console.log(lesson.description + this.selectedLesson.description === lesson.description);
    return this.selectedLesson.description === lesson.description ? true : false;
  }

  getDetails(lesson: Lesson) {
    console.log('details ' + lesson.description);
    this.selected.next(lesson);
  }
}
