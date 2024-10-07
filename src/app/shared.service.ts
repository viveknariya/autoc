import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}

  sharedSource = new BehaviorSubject<any>(null);

  parentToChildSource = new BehaviorSubject<any>(null);
  childToParentSource = new BehaviorSubject<any>(null);
}
