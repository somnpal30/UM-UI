import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Panel } from '../model/common/panel';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(private _httpclient: HttpClient) { }

  loadComponents = ():Observable<Panel[]> =>{
    return this._httpclient.get<Panel[]>('http://localhost:3000/components');
  }

}
