
/**
* Node Test 1
* Sort. Input(Array of Data), Algo, Algo params, Output.
*/

function SortAlgo(data,conf){
	this.data = data;
	this.result = data;
	this.conf = conf;
};

SortAlgo.prototype.sort= function(callback){
	callback && callback(this.result);
 return this.result;
}

SortAlgo.prototype.swap= function(data, i, j){
	if(i==j)return;
	var ele = data[i];
	data[i] = data[j];
	data[j] = ele;
	//console.log("Swap: " + data[i] + " <> " + data[j]);
}

SortAlgo.prototype.validateData = function(){
 return true;
}

SortAlgo.prototype.setData= function(data){
 this.data = data;
}

SortAlgo.prototype.getData= function(){
 return this.data;
}

SortAlgo.prototype.setConf= function(conf){
 this.conf = conf;
}

SortAlgo.prototype.getConf= function(){
 return this.conf;
}

module.exports = SortAlgo;
module.id = "SortAlgo";