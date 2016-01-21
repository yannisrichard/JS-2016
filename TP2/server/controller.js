//Classe methode qui sont des actions
require("./Dal");

class Controller {
	
	constructor( )
	{
		var dal = new Dal();
	}

	function index (Request, Response)
	{
		//~ response.writeHead(200, {"Content-Type": "application/html"});
		//~ response.write('<html><body>Index : All episodes</body></html>');
		dal.getAll();
		console.log(dal.getAll());
	}
	
	function getEpisode (Request, Response)
	{
		//~ response.writeHead(200, {"Content-Type": "application/html"});
	}


}

module.exports Controller
