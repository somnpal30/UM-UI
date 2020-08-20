import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Header} from "../../model/header/header";
import {Panel} from "../../model/common/panel";

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  constructor(private _https: HttpClient) {
  }


  loadHeaderData = (): Observable<Header[]> => {
    return this._https.get<Header[]>('http://localhost:3000/header');
  };

  loadComponents = (): Observable<Panel[]> => {
    return this._https.get<Panel[]>('http://localhost:3000/components');
  }

  loadSfmComponents = (): Observable<any> => {
    return this._https.get<any>('http://localhost:3000/sfm-response');
  }
}
