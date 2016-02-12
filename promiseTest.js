 var fs = require('fs');
function readJSONSync(filename) {
  return JSON.parse(fs.readFileSync(filename, 'utf8'));
}

var a = readJSONSync("testJSON.js");
//console.log(a.key1);

function readFileCallBack(err, res){
	if(err){		
		console.log("Error occured : " + err.message);
	}else{
		var b = JSON.parse(res);
		console.log(b.key1);
	}
}

function readJSON(filename, callBack) {
  fs.readFile(filename, 'utf8', callBack );
}

readJSON("testJSON.js", readFileCallBack);

function promiseCallback(fullfill, rejected){
	console.log("Promise invoked");
	setTimeout(functio(){console.log("Timeout test completed."); fullfill(); }, 1000);
}
function readFilePromise(filename) {
  return new Promise(
}


