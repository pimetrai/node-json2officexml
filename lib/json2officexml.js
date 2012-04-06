var xmlbuilder = require('xmlbuilder');
    
var j2o = exports;

var ExcelOfficeXmlWriter = j2o.ExcelOfficeXmlWriter = function(options) {

};

ExcelOfficeXmlWriter.prototype.writeDoc = function(doc) {
    if (!doc) return;
    return _writeExcelDoc(this, doc);
};

j2o.createExcelOfficeXmlWriter = function(path, options) {
    return new ExcelOfficeXmlWriter(options);
};

function _isoDateString(d){  
    function pad(n){return n<10 ? '0'+n : n}  
    return d.getUTCFullYear()+'-'
    + pad(d.getUTCMonth()+1)+'-'  
    + pad(d.getUTCDate())+'T'  
    + pad(d.getUTCHours())+':'  
    + pad(d.getUTCMinutes())+':'  
    + pad(d.getUTCSeconds())+".000"  ;//'Z'  
}

function _writeExcelDoc(writer, o) {
    var XMLHDR = { 'version': '1.0'};
    var doc = xmlbuilder.create();
    var child = doc.begin('ss:Workbook', XMLHDR).att("xmlns:ss","urn:schemas-microsoft-com:office:spreadsheet");
    child = child.ele("ss:Worksheet").att("ss:Name", "Export").ele("ss:Table");
    o.rows.forEach(function (i, v) {
        child = child.ele("ss:Row");
        for (name in i) {
            if (typeof i[name]!== 'function') {
                if (typeof i[name]=== 'object') {
                    if (i[name] instanceof Date) {
                        child = child.ele("ss:Cell").ele("ss:Data").att("ss:Type", "DateTime").raw(_isoDateString((i[name]))).up().up();                    
                    } else {
                        if (i[name] instanceof Array) { }
                    } 
                } else {
                    if ((typeof i[name]) === 'boolean') {
                    } else if ((typeof i[name]) === 'number') {
                        child = child.ele("ss:Cell").ele("ss:Data").att("ss:Type", "Number").txt(i[name]).up().up();                    
                    } else {
                        child = child.ele("ss:Cell").ele("ss:Data").att("ss:Type", "String").txt(i[name]).up().up();                    
                    }
                }
            }
        }
        child = child.up();
    });
    return doc;
}
  
