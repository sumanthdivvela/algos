
/**
* Node Test 1
* Sort. Input(Array of Data), Algo, Algo params, Output.
*/

var testCasesList = [{data:[1,5,7,8,9,10],result:[1,5,7,8,9,10]},
					 {data:[10,9,8,7,5,1],result:[1,5,7,8,9,10]},
					 {data:[8,9,10,1,5,7],result:[1,5,7,8,9,10]},
					 {data:[10,1,9,5,8,7],result:[1,5,7,8,9,10]},
					 {data:[8,1,9,5,8,7],result:[1,5,7,8,8,9]},
					]

					
var start = process.hrtime();
var debug = true;
var elapsedTime = function(mgs){
	if(!debug) return;
    var precision = 3; // 3 decimal places
    var elapsed = process.hrtime(start)[1] / 1000000; // divide by a million to get nano to milli
    console.log(process.hrtime(start)[0] + " s, " + elapsed.toFixed(precision) + " ms - " + mgs); // print message + time
    start = process.hrtime(); // reset the timer
}
					
function compare (a,b){
	if(!a || !b || typeof a !== typeof b || a.length !== b.length){
		return false;
	}
	var l=a.length;
	for(var i = 0; i < l;i++){
		if(a[i] !== b[i]){
			return false;
		}
	}
	return true;
}	
					
function runTestCases(algoName){
	var SortAlgo = require('./'+algoName+'.js');
	var testAlgo = new SortAlgo(),expectedResult;
	var l = testCasesList.length;
	console.log(" Executing Algo : " + algoName);		
	for(var i =0; i < l;i++){
		
		testAlgo.setData(testCasesList[i].data);
		elapsedTime("Sort Start of testcase : " + i);
		testAlgo.sort( ( function(){
							var expectedResult = testCasesList[i].result;
							var testcaseID = i;
							return (function(result){	
								elapsedTime("Sort End of testcase : " + i);
								if(compare(result,expectedResult)){
									console.log(" Tescase Passed : " + testcaseID);			
								}else{
									console.log(" Testcase Failed : " + testcaseID);
									console.log(" Testcase expected result : " + expectedResult);
									console.log(" Testcase Actual result : " + result);
								}							
							})
						}
						)() );		
	}
}
//runTestCases("MergeSortAlgo");
runTestCases("CountSortAlgo");


