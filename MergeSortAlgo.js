
/**
* Node Test 1
* Sort. Input(Array of Data), Algo, Algo params, Output.
*/
//[8,9,10,1,5,7]

var Classes = require('./Classes.js')
var SortAlgo = require('./SortAlgo.js');

var MergeSortAlgo = function (data,conf){
	//Call the super constructor with current data.
	MergeSortAlgo.superClass.call(this,data,conf);
};

Classes.inherit(MergeSortAlgo, SortAlgo);

MergeSortAlgo.prototype.sort= function(callback){	
	var data = this.data,l=data.length;	
	var m=1,k=1;
	data =mergeSort(data,0,data.length-1);
	callback && callback(data); 
}

function mergeSort(data,startIndex,endIndex){
	if(endIndex - startIndex > 0 ){
		var median = startIndex + Math.floor((endIndex - startIndex)/2);
		var a = mergeSort(data,startIndex,median);
		var b = mergeSort(data,median+1,endIndex);
		return merge(a,b);
	}else{
		return [data[startIndex]];
	}	
}

function merge(a,b){
	var c=[];
	var i = j = 0; 
	var al = a.length, bl = b.length;
	while(i < al && j < bl){
		if(a[i] < b[j]){		
			c.push(a[i]); 
			i++;
		}else{
			c.push(b[j]); 
			j++;
		}
	}	
	while(i < al){
		c.push(a[i]); 
		i++;
	}
	while(j < bl){
		c.push(b[j]); 
		j++;
	}
	return c;
}

module.exports = MergeSortAlgo;
module.id = "MergeSortAlgo";