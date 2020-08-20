import { Injectable } from '@angular/core';
import {Panel} from "../../model/common/panel";

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  private panels : Panel[];
  constructor() { }
}
