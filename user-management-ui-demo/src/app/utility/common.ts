import {Field} from "../model/common/field";

export class CommonUtils {

  static delimiter: String = "-"

  public static generateControlKey = (field: Field): string => {
    var key:string ="";
    if(field.apiGroup){
      key = key + field.apiGroup + CommonUtils.delimiter
    }
    if(field.apiSection) {
      key = key +field.apiSection + CommonUtils.delimiter
    }
    return key + field.name;
  }

  public static parseSfmResponse(obj, map: Map<string, string>, mapKey: string) {

    for (var key in obj) {
      if (obj[key] instanceof Object) {
        const localkey = mapKey + key +  CommonUtils.delimiter
        CommonUtils.parseSfmResponse(obj[key], map, localkey)
      } else {
        const tempMapKey = mapKey + key;
        //console.log(tempMapKey + " : " + obj[key])
        map.set(tempMapKey, obj[key])
      }
    }

  }
}
