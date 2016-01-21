require("./Router");
require("./Controller");


function start(port){
	//créer server
	//créer route
	//handle de la route
	var http = require("http");
	var routeur = new Router();
	var controller = new Controller();
	
	routeur.addGet("/", function(request, response){
		//Code action du controller
		controller.index(request, response);
	});
	routeur.addGet("/episode", function(request, response){
		//Code action du controller
		controller.getEpisode(request, response);
	});
	routeur.addPost("/", function(request, response){
		//Code action du controller
		
	});
	
	http.createServer(function(request, response) {
		router.handle(request, response);
	}).listen(port);
	console.log("Start Server " + port);
}

exports.start = start;
