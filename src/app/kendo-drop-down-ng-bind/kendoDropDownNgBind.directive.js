export function kendoDropDownNgBind() {
  'ngInject';

  /**
   * Overcome for http://www.telerik.com/forums/k-ng-model-is-not-updated-on-first-data-load
   */
  let directive = {
    restrict: 'A',
    require: ['ngModel', 'kendoDropDownList'],
    link: linkFunc
  };

  return directive;

  function linkFunc(scope , elm, attr , ctrls) {
    let [ngModel] = ctrls;
    let unregister = scope.$watch(() => ngModel.$modelValue, ()=> {
      $(elm).data('kendoDropDownList').select((dataItem) => dataItem.id === ngModel.$modelValue);
      unregister();
    });
  }
}


