/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var server=__webpack_require__(1),router=__webpack_require__(4),requestHandlers=__webpack_require__(5),handle={};handle["/"]=requestHandlers.add,handle["/all"]=requestHandlers.all,server.start(router.route,handle);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	function start(route,handle){function onRequest(request,response){var pathname=url.parse(request.url).pathname;console.log("Request for "+pathname+" received."),route(handle,pathname,response,request,dal)}var dal=new Data;dal.add("The Big Bang Theory",1,3),dal.add("Better Caul Saul",1,2),http.createServer(onRequest).listen(9312),console.log("server has started! http://localhost:9312")}var http=__webpack_require__(2),url=__webpack_require__(3),Data=__webpack_require__(6);exports.start=start;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("http");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("url");

/***/ },
/* 4 */
/***/ function(module, exports) {

	function route(handle,pathname,response,request,dal){return console.log("About to route a request for "+pathname),"function"==typeof handle[pathname]?handle[pathname](request,response,dal):(console.log("No request handler found for "+pathname),response.writeHead(404,{"Content-Type":"text/plain"}),response.write("404 NOT FOUND!"),response.end(),void 0)}exports.route=route;

/***/ },
/* 5 */
/***/ function(module, exports) {

	function add(request,response,dal){console.log("Add episode"),"POST"===request.method||response.writeHead(405,{"Content-Type":"text/plain"}),response.end()}function all(request,response,dal){console.log("Find all episodes"),"GET"===request.method?(response.writeHead(200,{"Content-Type":"application/json"}),response.write(JSON.stringify(Array.from(dal.findAll().values())))):response.writeHead(405,{"Content-Type":"text/plain"}),response.end()}function start(response){console.log("Request handler 'start' was called."),response.writeHead(200,{"Content-Type":"text/plain"}),response.write("HOLLO SATRT!"),response.end()}function upload(response){console.log("Request handler 'upload' was called."),response.writeHead(200,{"Content-Type":"text/plain"}),response.write("HELLO UOLOAD!"),response.end()}exports.add=add,exports.all=all;

/***/ },
/* 6 */
/***/ function(module, exports) {

	var Data=function(){function Data(){this.episodes=new Map}return Data.prototype.add=function(show,season,episode){var id=Math.random().toString(36).substring(7),episode={show:show,season:season,episode:episode,id:id};this.episodes.set(id,episode)},Data.prototype.findAll=function(){return this.episodes},Data};module.exports=Data();

/***/ }
/******/ ]);