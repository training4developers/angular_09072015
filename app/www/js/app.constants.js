(function() {

	angular.module("MyApp.Constants")
		.constant("WELCOME_TOKEN", "Welcome Class!")
		.run(function() {
			console.log("Run: MyApp.Constants");
		});

})(angular)
