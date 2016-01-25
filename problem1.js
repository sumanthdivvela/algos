/*
Input:
Each case contains W and B on a line separated by a space.

Output
"WHITE" - if the last ball in the hat will be white for sure.
"BLACK" - if the last ball in the hat will be black for sure.
"UNKNOWN" - if you can't be sure of the last ball's color.
*/

function problem1( w, b){
	var countOfW = w ? w : 0;
	var countOfB = b ? b : 0;
	
	if(countOfW + countOfB < 2){
		if(countOfW){
			return "WHITE";
		}else if(countOfB){
			return "BLACK";
		}else{
			return "UNKNOWN";
		}
	}else if(countOfW + countOfB === 2 && countOfW && countOfB){		
		return "UNKNOWN";	
	}else if(countOfW + countOfB === 2 && countOfW && !countOfB){		
		return "WHITE";	
	}else if(countOfW + countOfB === 2 && !countOfW && countOfB){		
		return "BLACK";	
	}else{
		return "UNKNOWN";	
	}
}

//Test cases:
//Case 1 : W : 0, B : undefined;
//Case 2 : W : undefined, B : 0;
//Case 3 : W : 1, B : 0;
//Case 4 : W : 0, B : 2;
//Case 5 : W : 1, B : 1;

//Case 6 : W : 2, B : 10;
//Case 7 : W : 21, B : 10;
//Case 8 : W : 11, B : 9;
//Case 9 : W : 99, B : 999;
//Case 10 : W : 9, B : 0;
var testCasesList = [{data:[0],result:"UNKNOWN"},
					 {data:[undefined,0],result:"UNKNOWN"},
					 {data:[1,0],result:"WHITE"},
					 {data:[0,2],result:"BLACK"},
					 {data:[1,1],result:"UNKNOWN"},
					 {data:[2,10],result:"UNKNOWN"},
					];
var testExec = require('./BaseTestCase.js');
//testExec.runTestCases(problem1,testCasesList );

function trail(prob){
	var rand = Math.random();	
	if(((rand/prob)) > 1)
		return false;
	return true;
}

function observe(c1,c2, condition ){
	return eval(condition);
}

console.log(observe(trail(0.5), trail(0.5), "c1 && c2" ));

function trailTest(prob){
	var count = 0;
	for(var i =0; i < 1000; i++){
		if(trail(prob))count++;
	}
	console.log(count);
}

var RG = new (function(){
	var a = 9848839918;
	var b = 8008110999;
	var m = 8008339918;
	var randN = process.hrtime()[1];
	var RG = function(){};
	RG.prototype.rand = function rand(){
		//console.log(randN);
		randN = (a * randN + b)%m;		
		//console.log(randN);
		return 100/randN;
	}
	return RG;
}())()

function testRG(){
	var testObj = {};
	for(var i =0; i < 1000; i++){
		var randN = RG.rand()
		if(testObj.randN){
			console.log(randN);
			console.log(" Test Failed.");
			break;
		}
		console.log(randN);
		testObj[randN] =randN;
	}
	console.log(" Test Success.");
}























