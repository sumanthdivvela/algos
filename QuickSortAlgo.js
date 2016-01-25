
/**
* Node Test 1
* Sort. Input(Array of Data), Algo, Algo params, Output.
*/
//[8,9,10,1,5,7]

var Classes = require('./Classes.js')
var SortAlgo = require('./SortAlgo.js');

var QuickSortAlgo = function (data,conf){
	//Call the super constructor with current data.
	QuickSortAlgo.superClass.call(this,data,conf);
};

Classes.inherit(QuickSortAlgo, SortAlgo);

QuickSortAlgo.prototype.sort= function(callback){	
	var data = this.data,l=data.length;	
	this.quickSort(data,0,l-1);
	callback && callback(data); 
}

QuickSortAlgo.prototype.quickSort = function (data,si,ei){
	if(si < ei) {		
		var j = this.partition(data,si,ei);
		this.quickSort(data,si,j-1);
		this.quickSort(data,j+1,ei);		
	}
}

QuickSortAlgo.prototype.partition = function(data,lo,hi){
	var rand = lo + Math.floor(Math.random()*(hi-lo));
	var pivot = data[rand],i=lo, j=lo;	
	this.swap(data,hi,rand);
	
	while(i < hi){
		if(data[i] <= pivot){
			this.swap(data,i,j);
			j++;
		}
		i++;
	}
	this.swap(data,hi,j);
	return j;
}


module.exports = QuickSortAlgo;
module.id = "QuickSortAlgo";
