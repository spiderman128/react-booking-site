export interface IForm {
  type: string;
  attributes?: any;
  label: string;
  fields?: { [key: string]: IForm }
};