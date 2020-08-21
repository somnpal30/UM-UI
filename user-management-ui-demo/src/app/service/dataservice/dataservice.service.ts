import { Injectable } from '@angular/core';
import {Panel} from "../../model/common/panel";
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  private _panels : Panel[];
  private _displayData : Map<string,[]>

  private observer = new Subject< Map<string,[]>>();
  subscriber$ = this.observer.asObservable()

  get panels(): Panel[] {
    return this._panels;
  }

  set panels(value: Panel[]) {
    this._panels = value;
  }


  get displayData(): Map<string, []> {
    return this._displayData;
  }

  set displayData(value: Map<string, []>) {
    //console.log(value)
    this._displayData = value;
  }

  updateDisplayData = ( data : Map<string,[]> ) => {
    //console.log(data)
    this.observer.next(data);
  }
}
