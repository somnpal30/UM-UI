import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private clickEvent = new BehaviorSubject<string>('');

  constructor() { }

  emitClickEvent = (message : string) => {
    this.clickEvent.next(message);
  }
  clickEventListener = () => {
    return this.clickEvent.asObservable();
  }
}
