(function(angular) {

	run.$inject = [];

	function run() {
		console.log("Run: MyApp.Controllers");
	}

	angular.module("MyApp.Controllers")
		.run(run);

})(angular);
