import 'babel-core/polyfill'
require('es6-promise').polyfill();
require('isomorphic-fetch');

// Test tableau
var test1 = 'obj1';
var test2 = 'obj2';
var array = [test1, test2];
console.log(array);

// Tableau de json
var json = [{ "doors" : 4, "model" : "Nissan" }, { "doors" : 3, "model" : "Renault"}];
// Tout le tableau
console.log(json);
// N'affiche que le modèle de la première voiture
console.log(json[0]['model']);

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

try
{
	console.log(i);
}
catch(e)
{
	if(e instanceof ReferenceError)
	{
		console.log("La variable n'existe pas");
	}
	
}

// Objet, création de la classe animal et de la classe chien qui hérite de la classe animal.
class Animal
{
	constructor(name, yearBirthday)
	{
		this.name = name;
		this.yearBirthday = yearBirthday;
	}

	getAge()
	{
		return 2016-this.yearBirthday;
	}
}
class Chien extends Animal
{
	aboyer()
	{
		console.log(this.name + ' aboie !');
	}
}

var a = new Chien('Titus', 2001);
console.log(a.name);
a.aboyer();
console.log(a.getAge());

// Math, retourne la valeur absolue d'un nombre

var nb = -152;
var b = Math.abs(nb);
console.log(b);

// Map 

var tableauCléValeur = [["clé1", "valeur1"], ["clé2", "valeur2"]];
var maMap = new Map(tableauCléValeur);
console.log(maMap.get("clé1"));

// Ajax - fetch

var request = new Request('http://localhost:9312/all', {
    headers: new Headers({
        'Accept': 'application/json'
    })
});

fetch(request, {
    mode: 'no-cors',
    method: 'GET'
}).then(function(response) {
    return response.json();
}).then(function(j) {
    console.log(j)
}).catch(function(err) {
   console.log(err);
});













