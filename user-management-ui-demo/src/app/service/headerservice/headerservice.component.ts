import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Header } from '../../model/header/header';
import { Panel } from '../../model/common/panel';

@Component({
  selector: 'app-headerservice',
  templateUrl: './headerservice.component.html',
  styleUrls: ['./headerservice.component.css'],
})


export class HeaderserviceComponent implements OnInit {
  constructor(private _https: HttpClient) {
  }


  ngOnInit(): void {
  }

  loadHeaderData = ():Observable<Header[]> => {
    return this._https.get<Header[]>('http://localhost:3000/header');
  };

  loadComponents = ():Observable<Panel[]> =>{
    return this._https.get<Panel[]>('http://localhost:3000/components');
  }

  loadSfmComponents = ():Observable<any> => {
    return this._https.get<any>('http://localhost:3000/sfm-response');
  }

}
