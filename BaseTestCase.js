var TestExecuter = (function (){
	var start = process.hrtime();
	var debug = true;
	var  logger = console;

	var elapsedTime = function(mgs){
		if(!debug) return;
		var precision = 3; // 3 decimal places
		var elapsed = process.hrtime(start)[1] / 1000000; // divide by a million to get nano to milli
		logger.log(process.hrtime(start)[0] + " s, " + elapsed.toFixed(precision) + " ms - " + mgs); // print message + time
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
						
	return {
			runTestCases : function (testAlgo, testCasesList ){
			if(testAlgo == null || typeof testAlgo == "undefiend" || testCasesList == null || typeof testCasesList == "undefiend" || testCasesList.length == 0){
				logger.log(" Tescase Failed :  Invalid test cases or problem ");	
				return;
			}
			var expectedResult;
			var l = testCasesList.length;		
			for(var i =0; i < l;i++){		
				elapsedTime("Sort Start of testcase : " + i);
				var result = testAlgo.apply(this, testCasesList[i].data);
				expectedResult = testCasesList[i].result;
				elapsedTime("Sort End of testcase : " + i);
				if(compare(result,expectedResult)){
					logger.log(" Tescase Passed : " + i);			
				}else{
					logger.log(" Testcase Failed : " + i);
					logger.log(" Testcase expected result : " + expectedResult);
					logger.log(" Testcase Actual result : " + result);
				}		
			}
		}
	}
})();	


module.exports = TestExecuter;
module.id = "TestExecuter";