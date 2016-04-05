export class MainController {
  constructor() {
    this.dropDownListOptions = {
      optionLabel: 'Please make a selection',
      dataTextField: 'label',
      dataValueField: 'id'
    };
    this.dropDownSource = [
      {
        id: '1', label: "one"
      },
      {
        id: '2', label: 'two'}
    ]
    this.dropdown = '2';
  }
}
