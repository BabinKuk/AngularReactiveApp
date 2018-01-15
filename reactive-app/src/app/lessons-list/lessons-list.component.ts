import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Lesson } from '../shared/model/lesson';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit {

  @Input()
  lessons: Lesson[];

  @Output()
  selected = new EventEmitter<Lesson>();

  constructor() { }

  ngOnInit() {
  }

  select(lesson: Lesson) {
    console.log('lesson selected');
    this.selected.next(lesson);
  }
}
