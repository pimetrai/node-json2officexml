var path = require("path");
var fs = require("fs");
var assert = require("assert");
var js2o = require("../");

var writer = js2o.createExcelOfficeXmlWriter();

var doc1 = {
    "columns" : [],
    "rows" : [
        { "firstname" : "John", "lastname": "Doo"},
        { "firstname" : "Foo", "lastname": "Bar", "age": 23, "weight": 25.7876, "birth" : new Date()}
    ]
    
};

var doc2 = {
	"sheets" : [
		{
			"name" : "Feuil1",
	    	"columns" : [],
	    	"rows" : [
	        	{ "firstname" : "John", "lastname": "Doo"},
	        	{ "firstname" : "Foo", "lastname": "Bar", "age": 23, "weight": 25.7876, "birth" : new Date()}
	    	]
    	},
    	{
			"name" : "Feuil2",
	    	"columns" : [],
	    	"rows" : [
	        	{ "firstname" : "Rene", "lastname": "Malin"},
	        	{ "firstname" : "Foo", "lastname": "foobar", "age": 73, "weight": 22225.33, "birth" : new Date()}
	    	]
    	}
    ]
};

console.log(writer.writeDoc(doc1).toString({ pretty: true }));
console.log(writer.writeDoc(doc2).toString({ pretty: true }));
