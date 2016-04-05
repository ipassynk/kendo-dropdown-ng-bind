The repo show the way to overcome issue described in
[Telerik Kendo Forum](http://www.telerik.com/forums/k-ng-model-is-not-updated-on-first-data-load)

The issue is that kendo drop-down list does not bind to the initial value on ng-model. Kendo officially suggest to use
k-ng-model instead of ng-model but k-ng-model does not work nicely with FormController.

So essentially look at kendoDropDownNgBind directive in the repo.

Thanks
Julia

