
/**
* Node Test 1
* Sort. Input(Array of Data), Algo, Algo params, Output.
*/
//[8,9,10,1,5,7]

var Classes = require('./Classes.js')
var SortAlgo = require('./SortAlgo.js');

var CountSortAlgo = function (data,conf){
	//Call the super constructor with current data.
	CountSortAlgo.superClass.call(this,data,conf);
};

Classes.inherit(CountSortAlgo, SortAlgo);

CountSortAlgo.prototype.sort= function(callback){	
	var data = this.data,l=data.length;	
	var buf = [], out = [];
	for(var i = 0; i < l;i++){
		buf[data[i]] = buf[data[i]] ? buf[data[i]]+ 1 : 1;		
	}
	
	for(i = 1; i < buf.length;i++){
		buf[i-1] = buf[i-1] ? buf[i-1] : 0;
		buf[i] = buf[i] ? buf[i] : 0;
		buf[i] = buf[i] + buf[i-1];		
	}
	
	for(var i = 0; i < l;i++){
		out[buf[data[i]] - 1] = data[i];			
		buf[data[i]] = buf[data[i]] - 1;		
	}
	data = out;	
	callback && callback(data); 
}



module.exports = CountSortAlgo;
module.id = "CountSortAlgo";