
/**
* Node Test 1
* Sort. Input(Array of Data), Algo, Algo params, Output.
*/
//[8,9,10,1,5,7]

var Classes = require('./Classes.js')
var SortAlgo = require('./SortAlgo.js');

var InsertSortAlgo = function (data,conf){
	//Call the super constructor with current data.
	InsertSortAlgo.superClass.call(this,data,conf);
};

Classes.inherit(InsertSortAlgo, SortAlgo);

InsertSortAlgo.prototype.sort= function(callback){	
	var data = this.data,l=data.length;	
	var m=1,k=1;
	for(;k < l; k++,m=k){
		while(m > 0 && data[m] < data[m-1]){
			this.swap(data,m,m-1);
			m--;
		}						
	}
	callback && callback(data); 
}

module.exports = InsertSortAlgo;
module.id = "InsertSortAlgo";