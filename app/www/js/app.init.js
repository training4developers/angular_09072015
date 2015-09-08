(function(angular) {

	angular.module("MyApp.Constants", []);
	angular.module("MyApp.Controllers", ["MyApp.Constants"]);
	angular.module("MyApp.Filters", ["MyApp.Constants"]);
	angular.module("MyApp", ["MyApp.Filters", "MyApp.Controllers"]);

})(angular);
