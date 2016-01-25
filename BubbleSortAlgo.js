
/**
* Node Test 1
* Sort. Input(Array of Data), Algo, Algo params, Output.
*/

var Classes = require('./Classes.js')
var SortAlgo = require('./SortAlgo.js');

function BubbleSortAlgo(data,conf){
	//Call the super constructor with current data.
	BubbleSortAlgo.superClass.call(this,data,conf);
};

Classes.inherit(BubbleSortAlgo, SortAlgo);

BubbleSortAlgo.prototype.sort= function(callback){
	var data = this.data,i=0,l=data.length, k=0;	
	console.log("Data: " + data);
	var ele = null;
	var m;
	for(;k < l; k++){
		m = l-k;
		for(;i< m; i++){		
			if(data[i] > data[i+1]){
				this.swap(data,i,i+1);				
			}
		}	
		i=0;
	}
	callback && callback(data); 
}

module.exports = BubbleSortAlgo;
module.id = "BubbleSortAlgo";