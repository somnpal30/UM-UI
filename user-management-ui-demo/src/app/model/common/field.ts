import { Validation } from './validation';
import { Option } from './option';

export class Field {
  label: string;
  type: string;
  inputType: string;
  name: string;
  id: string;
  value: string;
  isEditable: boolean;
  options: Option[];
  apiGroup:string;
  apiSection:string;
  validations: Validation[];
}
