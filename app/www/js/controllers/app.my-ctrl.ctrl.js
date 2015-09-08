(function(angular) {

	myCtrl.$inject = ["$scope", "WELCOME_TOKEN"];

	function myCtrl($scope, WELCOME_TOKEN) {
		$scope.message = WELCOME_TOKEN;
		console.log("MyCrtl");
	};

	angular.module("MyApp.Controllers")
		.controller("MyCtrl", myCtrl);

})(angular);
