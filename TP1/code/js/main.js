import 'babel-core/polyfill'
require('es6-promise').polyfill();
require('isomorphic-fetch');

//Test var
var toto = "toto";
console.log(toto);

//Test function
function hello(bonhomme) {
  return "Hello " + bonhomme;
}
console.log(hello("Toto"));

//Test division par 0 infinity
console.log("Resultat division par 0 : " + 12/0);

// Test tableau
var test1 = 'obj1';
var test2 = 'obj2';
var tab = [test1, test2];
console.log(tab);
// Tableau de json
var json = [{ "ville" : "chauriat", "nom" : "yannis" }, { "ville" : "totoville", "nom" : "Toto"}];
// Tout le tableau
console.log(json);
// N'affiche que la ville du deuxieme bonhomme
console.log(json[1]['ville']);

// Fonction promise (sucess dans ce cas), on remplace le true par false si on veut rentrer dans notre catch.
var promise = new Promise(
	function(resolve,reject)
	{
		if(true) {
			resolve('Success!');
		}
		else {
			reject('Failure!');
		}
	});

promise.then(
	function(s)
	{
		console.log(s);
	}).catch(
	function(e)
	{
		console.log(e);
});

//Test class
class Bonhomme {
	constructor(nom, age) {
		this.nom = nom;
		this.age = age;
	}
	
	info() {
		console.log('Je suis ' +this.nom);
	} 
}
	
var toto = new Bonhomme("toto", 10);
//Test classe
console.log(toto);
//Test methode
console.log(toto.info());

// callback
function callback (func, func2)
{
	func(4, 3);
	func2(3);
}
callback (
function (i, j)
{
	console.log(i , j);
}, 
function(a)
{
	console.log(a)
});

//Fetch
//NE fonctionne pas mais c'est normal probleme d'implémentation avec babeljs
//~ var request = new Request('http://localhost:9312/all', {
    //~ headers: new Headers({
        //~ 'Accept': 'application/json'
    //~ })
//~ });
//~ 
//~ fetch(request, {
    //~ mode: 'no-cors',
    //~ method: 'GET'
//~ }).then(function(response) {
    //~ return response.json();
//~ }).then(function(j) {
    //~ console.log(j)
//~ }).catch(function(err) {
   //~ console.log(err);
//~ });
//~ var request = new Request('http://www.jsonview.com/example.json', {
    //~ headers: new Headers({
        //~ 'Accept': 'application/json'
    //~ })
//~ });
//~ fetch(request, {
    //~ mode: 'no-cors',
    //~ method: 'GET'
//~ }).then(function(response) {
    //~ return response.json();
//~ }).then(function(j) {
    //~ console.log(j)
//~ }).catch(function(err) {
    //~ console.log("Oops, we haven't got JSON!");
//~ });


