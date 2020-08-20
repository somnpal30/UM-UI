import {Field} from "../model/common/field";

export class CommonUtils {

  static delimiter: String = "-"

  public static generateControlKey = (field: Field): string => {
    return field.apiGroup + CommonUtils.delimiter + field.apiSection + CommonUtils.delimiter + field.name;
  }

  public static parseJson = (map: Map<string, string>, json: any) => {

  }

}
