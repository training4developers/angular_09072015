(function(angular) {

	config.$inject = [];

	function config() {
		console.log("Config: MyApp.Controllers");
	}

	angular.module("MyApp.Controllers")
		.controller(config);

})(angular);
