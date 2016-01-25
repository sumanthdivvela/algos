
/**
* Node Test 1
* Sort. Input(Array of Data), Algo, Algo params, Output.
*/
//[8,9,10,1,5,7]

var Classes = require('./Classes.js')
var SortAlgo = require('./SortAlgo.js');

var SelectSortAlgo = function (data,conf){
	//Call the super constructor with current data.
	SelectSortAlgo.superClass.call(this,data,conf);
};

Classes.inherit(SelectSortAlgo, SortAlgo);

SelectSortAlgo.prototype.sort= function(callback){
	var data = this.data,i=0,l=data.length,k=0;	
	var m=0;
	for(;k < l; k++){		
		m=k;
		/*
		take current element as lowest and identify if there is any other lowest value above this
		and then swap them.
		*/
		for(i=k+1;i< l; i++){		
			if(data[m] > data[i]){
				m = i;
			}
		}
		if(m > k)
		this.swap(data,k,m);				
	}
	callback && callback(data); 
}

module.exports = SelectSortAlgo;
module.id = "SelectSortAlgo";