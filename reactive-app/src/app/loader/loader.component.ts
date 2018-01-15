import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs'
import {Router, NavigationStart, RoutesRecognized} from '@angular/router';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  loading$: Observable<boolean>;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.loading$ = this.router.events
        .map(event => event instanceof NavigationStart ||
                      event instanceof RoutesRecognized);
  }

}
