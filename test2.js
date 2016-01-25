
/**
* Node Test 1
* Sort. Input(Array of Data), Algo, Algo params, Output.
*/

var testCasesList = [
					 // {data:["123","45","7","221","19","111","15"], result:["7","15","19","45","111","123","221"]}
					//,{data:["12","15","7","122","19","19","215"], result:["7","12","15","19","19","122","215"]}
					//,
					{data:["AA","case","dds","data","debug","abs","ceil"], result:["abs","AA","case","ceil","data","dds","debug"]}
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
	var testAlgo = new SortAlgo([],{maxIndex: 5,maxBuf:256}),expectedResult;
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
runTestCases("RadixSortAlgo");


