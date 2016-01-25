/*

*/
function Classes(){
	
}

Classes.prototype.inherit = function(subClass, baseClass){
	var superClass = function(){};
	superClass.prototype = baseClass.prototype;
	subClass.prototype = new superClass();
	subClass.prototype.constructor = subClass;
	subClass.superClass = baseClass;
}

module.exports = new Classes();
module.id = "Classes";