(function(angular) {

	myUpperCase.$inject = [];

	function myUpperCase() {
		return function(value) {
			return String(value).toUpperCase();
		}
	}

	config.$inject = [];

	function config() {
		console.log("Config: MyApp.Filters");
	}

	run.$inject = ["$log"];

	function run($log) {
		$log.log("Run: MyApp.Filters");
	}

	angular.module("MyApp.Filters")
		.filter("myUpperCase", myUpperCase)
		.config(config)
		.run(run)

})(angular);
