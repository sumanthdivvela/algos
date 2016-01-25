
/**
* Node Test 1
* Sort. Input(Array of Data), Algo, Algo params, Output.
*/
//[8,9,10,1,5,7]

var Classes = require('./Classes.js')
var SortAlgo = require('./SortAlgo.js');

var RadixSortAlgo = function (data,conf){
	//Call the super constructor with current data.
	RadixSortAlgo.superClass.call(this,data,conf);
	this.maxIndex = conf ?  conf.maxIndex ?  conf.maxIndex : 3 : 3;
	this.maxBuf = conf ?  conf.maxBuf ?  conf.maxBuf : 10 : 10;
};

Classes.inherit(RadixSortAlgo, SortAlgo);

RadixSortAlgo.prototype.sort = function (callback){
	var out = this.data;
	for(var i = 0; i < this.maxIndex; i++){
		out = this.subSortAlpha(out, i);
		//out = this.subSort(out, i);		
	}	
	callback && callback(out);
}

//["123","45","7","22","19","191","15"] 0 
RadixSortAlgo.prototype.subSort= function(data, index){	
	var l=data.length;	
	var buf = new Array(this.maxBuf), out = new Array(l);
	var tmp;
	var ele;
	//Fill the buffer with count of elements with each digit in the given index.
	for(var i = 0; i < l;i++){
		ele = data[i];
		tmp = ele[ele.length-1- index];
		tmp = tmp ? tmp : 0;
		buf[tmp] = (buf[tmp] ? buf[tmp] + 1 : 1);		
	}
	//check if there is data in given digit place in buffer then update it with sum of current and previous value.
	//if there is not data in given digit place take value as 0.
	buf[buf.length-1] = l - (buf[buf.length-1] ? buf[buf.length-1] : 0);
	for(i = buf.length -2 ; i >= 0;i--){
		buf[i] = buf[i] ? buf[i] : 0;
		buf[i] = buf[i+1]  - buf[i] ;		
	}
	
	/* prepare output with the order from buf for each value in data with the index.
	*/	
	for(var i = 0; i < l;i++){
		ele = data[i];	
		tmp = ele[ele.length-1- index];
		tmp = tmp ? tmp : 0; 
		out[buf[tmp]] = data[i];			
		buf[tmp] = buf[tmp] + 1;		
	}
	return out;	
}

//["AA","case","dds","data","debug","abs","ceil"] 0 
RadixSortAlgo.prototype.subSortAlpha= function(data, index){	
	var l=data.length;	
	var buf = new Array(this.maxBuf), out = new Array(l);
	var tmp;
	var ele;
	//Fill the buffer with count of elements with each digit in the given index.
	for(var i = 0; i < l;i++){
		ele = data[i];
		tmp = ele[ele.length-1- index];
		tmp = tmp ? tmp.charCodeAt(0) : 0;
		buf[tmp] = (buf[tmp] ? buf[tmp] + 1 : 1);		
	}
	//check if there is data in given digit place in buffer then update it with sum of current and previous value.
	//if there is not data in given digit place take value as 0.
	buf[buf.length-1] = l - (buf[buf.length-1] ? buf[buf.length-1] : 0);
	for(i = buf.length -2 ; i >= 0;i--){
		buf[i] = buf[i] ? buf[i] : 0;
		buf[i] = buf[i+1]  - buf[i] ;		
	}
	
	/* prepare output with the order from buf for each value in data with the index.
	*/	
	for(var i = 0; i < l;i++){
		ele = data[i];	
		tmp = ele[ele.length-1- index];
		tmp = tmp ? tmp.charCodeAt(0) : 0; 
		out[buf[tmp]] = data[i];			
		buf[tmp] = buf[tmp] + 1;		
	}
	return out;	
}



module.exports = RadixSortAlgo;
module.id = "RadixSortAlgo";