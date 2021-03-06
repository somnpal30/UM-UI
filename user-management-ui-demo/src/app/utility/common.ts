import {Field} from "../model/common/field";
import {Section} from "../model/common/section";
import {Validation} from "../model/common/validation";
import {Validators} from "@angular/forms";
import {Panel} from "../model/common/panel";

export class CommonUtils {

  static delimiter: string = "-";
  static kyc: string = "KYC";

  public static generateControlKey = (field: Field): string => {

    var key: string = "";
    if (field.apiGroup) {
      key = key + field.apiGroup + CommonUtils.delimiter
    }
   /* if (field.apiSection) {
      key = key + field.apiSection + CommonUtils.delimiter
    }*/
    key= key + (field.apiSection ?  field.apiSection : "0")   + CommonUtils.delimiter
    return key + field.name;
  }

  public static parseSfmResponse(obj, map: Map<string, string>, mapKey: string) {

    for (var key in obj) {
      //console.log(obj)
      if (obj[key] instanceof Object) {
        const localkey = mapKey + key + CommonUtils.delimiter
        CommonUtils.parseSfmResponse(obj[key], map, localkey)
      } else {
        const tempMapKey = mapKey + key;
        //console.log(tempMapKey + " : " + obj[key])
        map.set(tempMapKey, obj[key])
      }
    }
  }

  public static mappedFieldToLabel = (panels: Panel[], map: Map<string, string>) => {
      panels.forEach( panel => {
        panel.sections?.forEach(section => {
          section.fields.forEach(field => {
            const key = CommonUtils.generateControlKey(field);
            const label = field.label
            //console.log(key + ": " + label);
            map.set(key,label);
          })
        })
      });
  }

  public static prepareSection(formValueMap: Map<string, string>, sections: Section[]): any {
    const values: any[] = [];
    if (sections) {
      sections.forEach(section => {
        values.push(CommonUtils.prepareField(formValueMap, section.fields))
      })
    }

    return values;
  }


  public static prepareField = (formValueMap: Map<string, string>, fields: Field[]): any => {
    const values: any[] = [];
    fields.forEach(field => {
      const key = CommonUtils.generateControlKey(field);
      const value = formValueMap.get(key);
      const tuple = [field.label, value]
      values.push(tuple);
    })
    return values;

  }

  public static bindValidations = (validations: Validation[]) => {
    const validList = [];
    if (validations.length > 0) {
      validations.forEach(v => {
        if (v.name === 'required') {
          validList.push(Validators.required);
        } else if (v.name === 'pattern') {
          validList.push(Validators.pattern(v.validator));
        }
      });
      // console.log(validList);
    }
    return Validators.compose(validList);
  };

  public static parseObject(obj, map: Map<string, string>) {
    for (var key in obj) {
      map.set(key, obj[key])
      //console.log("key: " + key + ", value: " + obj[key])
      if (obj[key] instanceof Object) {
        CommonUtils.parseObject(obj[key], map);
      }
    }
  }


}
