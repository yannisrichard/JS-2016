//Debuter par router.js
//3 méthodes handle(REquest, Response)
//addGet(path, callback)
//addPost(path, callback)
//this.posts = new Map() 2Map à faire une pour post et l'autre pour get
//addPOST 
//	this.posts.set(path, callback);

class Router {
	
	constructor( )
	{
		this.posts = new Map();
		this.gets = new Map();
	}

	function handle (Request, Response)
	{
		var url = require('url');
		var pathname = url.parse(request.url).pathname;
		
		switch (request.Response) {
			case GET :
				if (this.gets.has(pathname))
					this.gets.get(pathname)(request, response);
				else
					response.writeHead(404);
				break;
			case POST :
				if (this.posts.has(pathname))
					this.posts.get(pathname)(request, response);
				else
					response.writeHead(404);
				break;
			default :
				response.writeHead(405);
				break;
		}
		response.end;		 
	}

	function addGet (path, callback)
	{
		this.posts.set(path, callback);
	}

	function addPost(path, callback)
	{
		this.gets.set(path, callback);
	}

}

module.exports Router
