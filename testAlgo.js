
function pathTravers( paths,totalWeight){
	//var a = paths.pop();	
	//var b = paths.pop();	
	//traversGivenPath(a,b,paths,totalWeight);		
	//traversGivenPath(b,a,paths,totalWeight);	
	
	console.log(" total weight : " +  (paths[0].weight + 3 * paths[1].weight + 3 * paths[2].weight + paths[3].weight ) );
}

function traversGivenPath(ele, dir, paths, totalWeight ){
	paths.push(dir);	
	totalWeight = totalWeight + (ele.weight + 2 * dir.weight);
	console.log(ele.name+"," +dir.name + " : " + (ele.weight + 2 * dir.weight));	
	if(paths.length > 1)
		pathTravers(paths, totalWeight);
	else{
		console.log(" total weight : " + totalWeight);
	}
	paths.pop();
}

var a = [{name: "a", weight : 10},{name: "b", weight : 7},{name: "c", weight : 3},{name: "d", weight : 1}];

var totalWeight = 0;
//pathTravers(a,totalWeight);

function permutation(a, pre){	
	for(var i = 0; i < a.length; i++){ 
		var b = a.splice(i,1);		
		var seq = new Array();
			Array.prototype.push.apply(seq, pre);			
			seq.push(b[0]);
		if(seq.length == 4){
			console.log(seq);
			pathTravers(seq, 0);
		}
		if(a.length > 0)
			a = permutation(a,seq);			
		a.splice(i,0,b[0]);		
	}
	return a;
}
//permutation(a,[]);
function Path (weight, node){
	this.weight = weight
	this.node = node;
	this.visited = false;
}

Path.prototype.toString = function (){	
	console.log(this.weight +"  : " +this.node);
}

function Node ( eles ){
	this.ele1 = eles[0];
	this.ele2 = eles[1];
	this.weight = this.ele1.weight + this.ele2.weight;
	this.paths = [];
}

Node.prototype.toString = function (){	
	console.log(this.ele1.name +"," +this.ele1.name  + " : " + this.weight);
}

Node.prototype.contains = function(ele){
	return ele.name === this.ele1.name || ele.name === this.ele2.name;
}

function permutationN(a, r, pre, result){	
	for(var i = 0; i < a.length; i++){ 
		var b = a.splice(i,1);		
		var seq = new Array();
			Array.prototype.push.apply(seq, pre);			
			seq.push(b[0]);
		if(seq.length == r){			
			result.push(new Node(seq));
		}
		if(a.length > 0 && seq.length < r)
			a = permutationN(a, r, seq,result);			
		a.splice(i,0,b[0]);		
	}
	return a;
}


function combinations(a, r, pre, result, si){	
	for(var i = si; i < a.length; i++){ 
		var b = a[i];		
		var seq = new Array();
		Array.prototype.push.apply(seq, pre);			
		seq.push(b);		
		if(seq.length == r){			
			result.push(new Node(seq));
		}
		if(a.length > 0 && seq.length < r)
			a = combinations(a, r, seq, result, i+1);			
	}
	return a;
}




function preparePaths(nodeList){
	var node,nodePath;
	for(var i = 0; i < nodeList.length; i++){
		node = nodeList[i];			
		for(var j = 0; j < nodeList.length; j++){
			nodePath = nodeList[j];
			if(i != j ){
				if(nodePath.contains(node.ele1) &&  !nodePath.contains(node.ele2)){					
					node.paths.push(new Path(node.ele1.weight, nodePath));
				}else if(nodePath.contains(node.ele2)  &&  !nodePath.contains(node.ele1)){					
					node.paths.push(new Path( node.ele2.weight , nodePath));
				}
			}
		}
	}
}
function traversNode(node,traversed, weight){						
		traversed.push(node);
		weight = weight + node.weight;
		if(traversed.length == 3){
			//console.log(traversed);
			console.log("Total weight : " + weight);
			node = traversed.pop();
			weight = weight - node.weight;
			return;
		}
		var paths = node.paths;		
		traversPaths(paths, traversed, weight);	
		node = traversed.pop();
		weight = weight - node.weight;
}
function traversPaths(paths,traversed, weight){						
		var index = 0;
		while(index < paths.length){
			var path = paths[index];			
			if(traversed.indexOf(path.node) == -1){
				weight =  weight + path.weight;	
				traversNode(path.node, traversed, weight );	
				weight = weight - path.weight;				
			}
			index++;
		}			
}

function traversPathsOld(nodeList){	
	var weight = 0;
	var node = nodeList.shift();
	var traversed = [];	
	var j = 0;
	var path;
	while(true){
		weight = weight +  node.weight;	
		traversed.push(node);
		if(traversed.length == 3){
			console.log(traversed);
			console.log("weight : " + weight);
			traversed = [];
			weight = 0;
			if(nodeList.length > 0){
				node = nodeList.shift();
				traversed = [];
				weight = 0;
				continue;
			}else{
				break;
			}
		}
		var paths = node.paths;
		while(paths.length > 0){
			path = paths.shift();		
			if(!path.visited && traversed.indexOf(path.node) == -1){
				path.visited = true;
				weight =  weight + path.weight;		
				node = path.node;			
				break;
			}
		}
		
	}
		
}

var result = [];
combinations(a,2,[],result,0);
preparePaths(result);
for(var i = 0; i < result.length; i++){
	traversNode(result[i] , [], 0);
}
console.log(result.length);
console.log(result);