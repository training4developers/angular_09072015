module.exports = function(grunt) {

	grunt.initConfig({
		webServer: {
			port: 8080,
			rootFolder: "app/www"
		}
	});

	grunt.registerTask("default", "web server", function() {

		var
			http = require("http"),
			express = require("express"),
			app = express(),
			webServerConfig = grunt.config("webServer"),
			path = require("path");

		this.async();

		app.use("/jasmine", express.static(path.join(webServerConfig.rootFolder, "jasmine")));
		app.use("/css", express.static(path.join(webServerConfig.rootFolder, "css")));
		app.use("/js", express.static(path.join(webServerConfig.rootFolder, "js")));
		app.use("/libs", express.static(path.join(webServerConfig.rootFolder, "libs")));
		app.use("/partials", express.static(path.join(webServerConfig.rootFolder, "partials")));

		app.use(function(req, res) {

			res.sendFile(path.join(__dirname, webServerConfig.rootFolder, "index.html"), function(err) {
				if (err) {
					res.status(err.status).end();
				}
			});

		});

		http.createServer(app).listen(webServerConfig.port,
			function() {
				console.log("web server started on port " +
					webServerConfig.port);
			});

	});

};
