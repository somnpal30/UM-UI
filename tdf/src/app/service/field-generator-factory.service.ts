import { Injectable } from '@angular/core';
import { Section } from '../model/common/section';
import { Field } from '../model/common/field';

@Injectable({
  providedIn: 'root'
})
export class FieldGeneratorFactoryService {

  constructor() { }

  generateFormGroup(section : Section){
      const fields:Field[] = section.fields

  }
}
