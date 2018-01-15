import { TestBed, inject } from '@angular/core/testing';

import { CoursesHttpService } from './courses-http.service';

describe('CoursesHttp.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursesHttpService]
    });
  });

  it('should be created', inject([CoursesHttpService], (service: CoursesHttpService) => {
    expect(service).toBeTruthy();
  }));
});
