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

console.log(writer.writeDoc(doc1).toString({ pretty: true }));
