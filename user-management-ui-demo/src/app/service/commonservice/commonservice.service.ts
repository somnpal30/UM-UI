import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Header} from "../../model/header/header";
import {Panel} from "../../model/common/panel";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  constructor(private _https: HttpClient) {
  }


  loadHeaderData = (): Observable<Header[]> => {
    return this._https.get<Header[]>(environment.headerUrl);
  };

  loadComponents = (): Observable<Panel[]> => {
    return this._https.get<Panel[]>(environment.componentUrl);
  }

  loadSfmComponents = (): Observable<any> => {
    return this._https.get<any>(environment.sfmResponseUrl);
  }
}
