import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  errors$: Observable<string[]> = Observable.of([]);

  constructor(private messagesService: MessagesService) { }

  ngOnInit() {
    this.errors$ = this.messagesService.errors$;
  }

  close() {
    console.log('close err msg');
    // emit empty list of errors
    this.messagesService.error();
  }

}
