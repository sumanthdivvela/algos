var appG = {}
CONSTS = {};
CONSTS.GridItem0Cell = "gridItem0Cell";
CONSTS.GridItem1Cell = "gridItem1Cell";
CONSTS.GridItem2Cell = "gridItem2Cell";
CONSTS.GridItem3Cell = "gridItem3Cell";
CONSTS.GridItem4Cell = "gridItem4Cell";
CONSTS.GridItem5Cell = "gridItem5Cell";
CONSTS.GridItem6Cell = "gridItem6Cell";
CONSTS.GridItem7Cell = "gridItem7Cell";
CONSTS.GridItem8Cell = "gridItem8Cell";
CONSTS.GridItem9Cell = "gridItem9Cell";
CONSTS.GridItem10Cell = "gridItem10Cell";
CONSTS.GridItemEmpty = "gridItemEmpty";

appG.GridOptionsList = [
//Item 1 : 4 cell Square;
[[CONSTS.GridItem1Cell, CONSTS.GridItem1Cell], 
 [CONSTS.GridItem1Cell, CONSTS.GridItem1Cell]], 
//Item 2 : inverted L;
[[CONSTS.GridItem2Cell, CONSTS.GridItem2Cell],
 [CONSTS.GridItem2Cell, CONSTS.GridItemEmpty]], 
//Item 3 : 3 cell vertical line;
[[CONSTS.GridItem3Cell],
 [CONSTS.GridItem3Cell],
 [CONSTS.GridItem3Cell]], 
//Item 4 : 4 cell horizantal line;
[[CONSTS.GridItem4Cell,CONSTS.GridItem4Cell,CONSTS.GridItem4Cell,CONSTS.GridItem4Cell,CONSTS.GridItem4Cell]], 
//Item 5 : 3 dim inverted L;
[[CONSTS.GridItem5Cell, CONSTS.GridItem5Cell, CONSTS.GridItem5Cell],
 [CONSTS.GridItemEmpty, CONSTS.GridItemEmpty, CONSTS.GridItem5Cell],
 [CONSTS.GridItemEmpty, CONSTS.GridItemEmpty, CONSTS.GridItem5Cell]], 

//Item 6 : 9 cell square ;
[[CONSTS.GridItem6Cell, CONSTS.GridItem6Cell, CONSTS.GridItem6Cell], 
[CONSTS.GridItem6Cell, CONSTS.GridItem6Cell, CONSTS.GridItem6Cell], 
[CONSTS.GridItem6Cell, CONSTS.GridItem6Cell, CONSTS.GridItem6Cell]], 

[[CONSTS.GridItem7Cell]],

[[CONSTS.GridItem7Cell],
 [CONSTS.GridItem7Cell]],

[[CONSTS.GridItem7Cell, CONSTS.GridItem7Cell]],

[[CONSTS.GridItemEmpty, CONSTS.GridItem8Cell, CONSTS.GridItem8Cell],
 [CONSTS.GridItem8Cell, CONSTS.GridItem8Cell, CONSTS.GridItemEmpty]],

[[CONSTS.GridItemEmpty, CONSTS.GridItem9Cell],
 [CONSTS.GridItem9Cell, CONSTS.GridItem9Cell],
 [CONSTS.GridItem9Cell, CONSTS.GridItemEmpty]],
 
 [[CONSTS.GridItemEmpty, CONSTS.GridItem10Cell, CONSTS.GridItemEmpty],
 [CONSTS.GridItem10Cell, CONSTS.GridItem10Cell, CONSTS.GridItem10Cell]],
 
 
];

function initializeApp(){
	
	appG.baseScore = 1000;
	appG.baseOptions = 7;
	appG.gridOptions = [];
	appG.gridOptionsPlaced = [];
	appG.score = 0;	
	appG.col =[0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	appG.row =[0, 0, 0, 0, 0, 0, 0, 0, 0, 0];		
	appG.GridCanvasItems = [
	[CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell], 
	[CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell], 
	[CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell], 
	[CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell], 
	[CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell], 
	[CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell], 
	[CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell], 
	[CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell], 
	[CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell], 
	[CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell, CONSTS.GridItem0Cell]
	];
	
}

function restoreApp(){
	var appState = localStorage.getItem("APP_STATE") ;		
	appState = appState ? JSON.parse(appState) : {};
	appG.appState = appState;
	
	appG.gridOptions = appState.gridOptions || appG.gridOptions ;
	appG.gridOptionsPlaced = appState.gridOptionsPlaced || appG.gridOptionsPlaced;
	appG.score = appState.score || appG.score;
	appG.maxScore = appState.maxScore;
	appG.col = appState.col || appG.col;
	appG.row = appState.row || appG.row;		
	appG.GridCanvasItems = appState.GridCanvasItems || appG.GridCanvasItems
	updateScore();
}

function appUnload(){
	var appState = appG.appState  ;	
	
	appState.gridOptions = appG.gridOptions;
	appState.score = appG.score;
	appState.maxScore = appG.maxScore;
	appState.col = appG.col;
	appState.row = appG.row;
	appState.gridOptionsPlaced = appG.gridOptionsPlaced;
	appState.GridCanvasItems = appG.GridCanvasItems;	
	localStorage.setItem("APP_STATE", JSON.stringify(appState));
	
}

function appOnload() {
	initializeApp();
	restoreApp()
    createGridCanvas();
    createGridOptions();
    appG.maxScore = appG.maxScore ? appG.maxScore : 0;
    var ele = document.getElementById("maxScore");
    ele.innerHTML = appG.maxScore;
}

function createGridCanvas() {
    var a = document.getElementById("gridCanvas");
	
	updateDimensions(a);
	
    var l = appG.GridCanvasItems.length;
    var gridItems = appG.GridCanvasItems;
    var gridHtml = "";
    for (var row = 0; row < l; row++) {
        for (var col = 0; col < l; col++) {
            gridHtml = gridHtml + createGridCell("cellSize "+ gridItems[row][col], row, col)
        }
    }
    a.innerHTML = gridHtml;
}

function updateDimensions(gridCanvas){
	var gridWidth =  gridCanvas.offsetWidth;
	gridCanvas.style.cssText = "height:" + gridWidth + "px;"
	
	var a = document.getElementById("gameOverView");
	a.style.cssText = "display:none;height:" + screen.height + "px;"
	
	var cellSize = ((gridWidth -30)/appG.GridCanvasItems.length) - 2;
	appG.gridWidth = gridWidth;
	appG.cellSize = cellSize;
	appG.cellMinSize = ((gridWidth -30)/15)-2;
	appG.gridOptionsTop = (gridCanvas.offsetHeight + gridCanvas.offsetTop + 5 );
	var styleSheet = document.styleSheets[0];
	styleSheet.insertRule(".cellSize" + '{ height: ' + cellSize + 'px; width: ' + cellSize + 'px;}', styleSheet.cssRules.length);
	styleSheet.insertRule(".cellSizeZ" + '{ height: ' + (cellSize - 4) + 'px; width: ' + (cellSize - 4) + 'px;}', styleSheet.cssRules.length);
	styleSheet.insertRule(".cellSizeMin" + '{ height: ' + appG.cellMinSize + 'px; width: ' + appG.cellMinSize + 'px;}', styleSheet.cssRules.length);
	styleSheet.insertRule(".gridItemCont" + '{ width: ' + ((gridWidth -30)/3) + 'px;}', styleSheet.cssRules.length);
	
	
	var gridOptions = gridCanvas.nextSibling;
	gridOptions.style.cssText = "top:" +appG.gridOptionsTop+ "px; height: " + (cellSize * 6) + "px;"
	
	
}

function createGridCell(skin, r, c) {
    return "<div class='"+(skin ? skin : "cellSize")+ "' id='gridEle_"+r+"_"+c+"' ></div>"
}


function trail(prob) {
    var rand = Math.random();
    if (((rand / prob)) > 1)
        return false;
    return true;
}


function randItems() {
    var randList = [];
	var i = 0;
    while (randList.length < 3) {
        if (trail(1 / appG.GridOptionsList.length)) {
			var scale = appG.score < appG.baseScore ? appG.baseOptions : appG.GridOptionsList.length;
            randList.push(appG.GridOptionsList[i % scale]);			
        }
		i++;
    }
	return randList;
}

function createGridOptions() {
    
    unRegisterTouchEvents();   
	var randList;   	
	if(appG.gridOptions.length > 0){
		randList = appG.gridOptions;
	}else{
		randList = randItems();
		appG.gridOptionsPlaced = [];
	}	
    appG.gridOptions = randList;
    var l = randList.length;
    for (var i = 0; i < l; i++) {		
			var a = document.getElementById("gridProbItem" + i);
			renderGridOption(a, "cellSizeMin ")		
    }
    registerTouchEvents(l);
}

function renderGridOption(element, cellSkin, update, parentLeft) {
    var gridOptionRow;
    var gridOptionCol;
    var width = 0;
    var height = 0;
    var gridHtml = "";
    var left = 0;
    var option = element.getAttribute("data-option");
	
	if(appG.gridOptionsPlaced[option] == true ){
		return;
	}
	
    var gridOption = appG.gridOptions[option];
    height = gridOption.length > height ? gridOption.length : height;
    var elementChildren = element.childNodes;
    var k = 0;
    for (var row = 0; row < gridOption.length; row++) {
        gridOptionRow = gridOption[row];
        width = gridOptionRow.length > width ? gridOptionRow.length : width;
        for (var col = 0; col < gridOptionRow.length; col++) {
            gridOptionCol = gridOptionRow[col];
            if (update && elementChildren.length > 0) {
                replaceClass(elementChildren[k], 'cellSize\\S*', cellSkin);                
            } else {
                gridHtml = gridHtml + "<div class='"+ cellSkin + gridOptionCol + "' ></div>"
            }
            k++;
        }    
    }

    if(!update){
        element.innerHTML = gridHtml;    
    }    
    element.style.cssText = "width:auto;";
	var rect = elementChildren[0].getBoundingClientRect();
	 if (update) {
		var cellSize = rect.width + 6;	 
	 }
	 else{
		var cellSize = rect.width + 2; 
	 }
	 
	 width = Math.ceil(width * cellSize);
	 height = Math.ceil(height * cellSize);
    
    element.style.cssText = "width:" + width + "px;height:" + height 
    + "px; left:" + left + "px;";
	
	element.style.width = "width:" + width + "px;" 

    if (update) {
        if(parentLeft + element.offsetWidth > appG.gridWidth){
            left = appG.gridWidth - (parentLeft + element.offsetWidth) ;
        }else{
            left = ((element.parentElement.offsetWidth - width) / 2);
        }
    }else{       
        left = ((element.parentElement.offsetWidth - width) / 2);
    }

    element.style.left = left + "px";
	//element.style.display = "none";
	element.style.display = "";
}


function gridOptionSelect(element) {
    var childs = element.child
}


function playAgain(event){
	
	localStorage.setItem("APP_STATE",JSON.stringify({maxScore: appG.maxScore})) ;
	var ele = event.target;	
	var element = document.getElementById("gameOverScore");
	element.innerHTML= ""+appG.score;
	appOnload();
	ele.parentElement.style.display = "none";
	
}

function displayGameOverView(){
	localStorage.setItem("APP_STATE",JSON.stringify({maxScore: appG.maxScore})) ;	
	updateDisplay("gameOverView"," inline-flex" );
	var ele = document.getElementById("gameOverScore");
	ele.innerHTML= ""+appG.score;
	initializeApp();
	updateDisplay("gameOver","block" );
	updateDisplay("closeGameOverView","none" );
}

function displaySettings(event){
	updateDisplay("gameOverView"," inline-flex" );
	var ele = document.getElementById("gameOverScore");
	ele.innerHTML= ""+appG.score;
	updateDisplay("gameOver","none" );
	updateDisplay("closeGameOverView","block" );	
}

function closeDisplaySettings(event){
	updateDisplay("gameOverView","none" );
	updateDisplay("gameOver","block" );
	updateDisplay("closeGameOverView","none" );	
}

function updateDisplay(id, display){
	var ele = document.getElementById(id);
	ele.style.display = display;
}

function registerTouchEvents(l) {
    for (var i = 0; i < l; i++) {
		if(appG.gridOptionsPlaced[i] == true ){
			continue;
		}
        var a = document.getElementById("gridProbItem" + i);
        touch.eventList.push(new DragDrop(a));
    }
	
	addEventListener("playAgain", "click" , playAgain);
	addEventListener("settings", "click" , displaySettings);
	addEventListener("closeGameOverView", "click" , closeDisplaySettings);

}

function unRegisterTouchEvents() {
    var l = touch.eventList.length;
    for (var i = 0; i < l; i++) {
        touch.eventList[i].removeEvent();
    }
    touch.eventList = [];
	
	removeEventListener("playAgain", "click" , playAgain);
	removeEventListener("settings", "click" , displaySettings);
	removeEventListener("closeGameOverView", "click" , closeDisplaySettings);
}

function addEventListener(id, eventType, callback){
	var ele = document.getElementById(id);
	ele.addEventListener(eventType , callback, false);
}

function removeEventListener(id, eventType, callback){
	var ele = document.getElementById(id);
	ele.removeEventListener(eventType , callback, false);
}

function isTouchDevice() {
    return 'ontouchstart' in document.documentElement;
}

touch = {};
if(isTouchDevice()){
	touch.events = {
		touchstart: "touchstart",
		touchmove: "touchmove",
		touchend: "touchend",
		touchcancel: "touchcancel",
	}
}else{
	var isPointerSupported = navigator.pointerEnabled;
    if(isPointerSupported)
    {
		touch.events = {
			touchstart: "pointerdown",
			touchmove: "pointermove",
			touchend: "pointerup",
			touchcancel: "pointerout",
		}
	}else{
		touch.events = {
			touchstart: "mousedown",
			touchmove: "mousemove",
			touchend: "mouseup",
			touchcancel: "mouseout",
		}
	}		
}

touch.eventList = [];

function DragDrop(element) {
    this.element = element;
    this.startLeft = element.offsetLeft;
    //this.snapedCell = undefined;
    this.snapedCellXY = [-1,-1];
    this.parentLeft = element.parentElement.offsetLeft
    var option = element.getAttribute("data-option");
    this.gridOption = appG.gridOptions[option];
    this.noOfRows = this.gridOption.length;    
    this.noOfCols = 0;
    this.cellSkin = this.gridOption[0][0];
    for (var i = 0; i < this.noOfRows; i++) {
        this.noOfCols = this.noOfCols > this.gridOption[i].length ? this.noOfCols : this.gridOption[i].length;
        if(this.cellSkin == CONSTS.GridItemEmpty){
            this.cellSkin = this.gridOption[i][0]
        }
    }    
    element.parentElement.addEventListener(touch.events.touchstart, this, false);
}

DragDrop.prototype = {
    
    handleEvent: function(event) {		
        switch (event.type) 
        {
        case touch.events.touchstart:
            return this.onTouchStart(event);
            break;
        case touch.events.touchmove:
            return this.onTouchMove(event);
            break;
        case touch.events.touchend:
        case touch.events.touchcancel:
            return this.onTouchEnd(event);
            break;
        }        
    },
    
    onTouchStart: function(event) {
        var element = this.element;
        element.parentElement.addEventListener(touch.events.touchmove, this, false);
        element.parentElement.addEventListener(touch.events.touchend, this, false);
        element.parentElement.addEventListener(touch.events.touchcancel, this, false);
        
        var touchEvent = event.touches && event.touches[0] || event;
        
        this.x1 = touchEvent.pageX || touchEvent.clientX;
        this.y1 = touchEvent.pageY || touchEvent.clientY;
        this.mappedCells = undefined;
        renderGridOption(element, "cellSizeZ ", true,this.parentLeft);        
        element.style.top =  (element.offsetTop - 100) + "px";

    },
    
    onTouchMove: function(event) {
        var element = this.element;
        var touchEvent = event.touches && event.touches[0] || event;
        this.x2 = touchEvent.pageX || touchEvent.clientX;
        this.y2 = touchEvent.pageY || touchEvent.clientY;
        
        var left = (this.startLeft + this.x2 - this.x1);
        var top = (this.y2 - this.y1 - 100)
        if (left > (0 - this.parentLeft) 
        && left < (appG.gridWidth - this.parentLeft - element.offsetWidth) 
        && top > -appG.gridWidth && top < window.screen.availHeight - appG.gridOptionsTop - element.offsetHeight) {
			
            this.identifyBoundingRect(left, top);
        
        }    
    },
    
    onTouchEnd: function(event) {
        var element = this.element;
        element.style.left = this.startLeft;
        element.parentElement.removeEventListener(touch.events.touchmove, this, false);
        element.parentElement.removeEventListener(touch.events.touchend, this, false);
        element.parentElement.removeEventListener(touch.events.touchcancel, this, false);
        
        renderGridOption(element, "cellSizeMin ", true,this.parentLeft);
        element.style.left = this.startLeft + "px";
        element.style.top = "0px";
        this.snapToGridCell();
    },
    
    removeEvent: function() {
        this.element.parentElement.removeEventListener(touch.events.touchstart, this, false);
    },
    
    identifyBoundingRect: function(x, y) {
        var element = this.element;
        var canvas = document.getElementById("gridCanvas");
        var colIndex = Math.round((this.parentLeft - 15 + x) / appG.cellSize);
        var rowIndex = Math.round((appG.gridWidth - 30 + y) / appG.cellSize);

        if (colIndex < 10 && rowIndex < 10 
			&& (this.snapedCellXY[0] != rowIndex || this.snapedCellXY[1] != colIndex) ) {
			element.style.left = x + "px";
			element.style.top = y + "px";			
            var ele = document.getElementById("gridEle_" + rowIndex + "_" + colIndex);
            if ((colIndex + this.noOfCols) <= 10 && (rowIndex + this.noOfRows) <= 10 
				&& this.checkForOverlap(ele, rowIndex, colIndex)) {                
                this.snapOption(ele);
                //this.snapedCell = ele;
                this.snapedCellXY = [rowIndex, colIndex];
            }else{
				this.mappedCells = undefined;
				this.snapedCellXY = [-1,-1];
			}
        }else if( this.snapedCellXY[0] != rowIndex || this.snapedCellXY[1] != colIndex){
			element.style.left = x + "px";
			element.style.top = y + "px";
		}
    },
    
    snapOption: function(canvasCell) {
        var element = this.element;
        var xi = canvasCell.offsetLeft - this.parentLeft;
        var yi = canvasCell.offsetTop - (appG.gridWidth + 6);
        element.style.left = xi + "px";
        element.style.top = yi + "px";
    },
    
    snapToGridCell: function() {
        if (this.mappedCells) {
            var mappedCells = this.mappedCells;
            for (var i = 0; i < mappedCells.length; i++) 
            {
                var mappedCell = mappedCells[i];
                var rowIndex = mappedCell[0];
                var colIndex = mappedCell[1];
                appG.GridCanvasItems[rowIndex][colIndex] = this.cellSkin;
                appG.row[rowIndex] = appG.row[rowIndex] + 1;
                appG.col[colIndex] = appG.col[colIndex] + 1;
                
                var ele = document.getElementById("gridEle_" + rowIndex + "_" + colIndex);
                replaceClass(ele, 'gridItem\\S*', " " + this.cellSkin);
                
                checkForLineMatch(rowIndex, colIndex);
            }           
            appG.score = appG.score + mappedCells.length;
            this.mappedCells = undefined;
            updateScore();
            this.removeOption();
            
			if(checkForGameOver()){				
				
				displayGameOverView();				
			}
        }
    },
    
    checkForOverlap: function(canvasCell, rowIndex, colIndex) {
        var mappedCells = [];
        var rows = rowIndex + this.noOfRows;
        var cols = colIndex + this.noOfCols;
		try{
			for (var row = rowIndex; row < rows; row++) {
				for (var col = colIndex; col < cols; col++) {            
					if (appG.GridCanvasItems[row][col] !== CONSTS.GridItem0Cell 
						&& this.gridOption[row - rowIndex][col - colIndex] !== CONSTS.GridItemEmpty) {
						return false;
					} else {
						if (this.gridOption[row - rowIndex][col - colIndex] !== CONSTS.GridItemEmpty) {
							mappedCells.push([row, col]);
						}
					}
				}
			}
		}catch(e){
			return false;
		}
        
        this.mappedCells = mappedCells;
        return true;
    },
    
    removeOption: function() {
        this.removeEvent();
        this.element.innerHTML = "";

		var option = this.element.getAttribute("data-option");	
		appG.gridOptionsPlaced[option] = true
		
        var index = touch.eventList.indexOf(this);
        if (index > -1) {
            touch.eventList.splice(index, 1);
        }
        if (touch.eventList.length == 0) {
			appG.gridOptions = [];
			appG.gridOptionsPlaced = [];
            createGridOptions();
        }
    },

    stopEventPropagation : function(event){
    	if(event.stopEventPropagation){
    		event.stopEventPropagation();	
    	}else {
    		event.cancelBubble = true;
    	}

    	if (event.preventDefault) 
			event.preventDefault();
		else 
			event.returnValue = false;
    }

}

function gameOver(){
	var ele = document.getElementById("gameOver");
	if(ele == undefined){
		var divEle = document.createElement('div');
	}
}

function checkForGameOver(){	
	var gridOptionTouchs = touch.eventList;	
	var a = document.getElementById("gridCanvas");
	var l = appG.GridCanvasItems.length;
	var noSnapGrid = true;
	for(var i = 0; i < gridOptionTouchs.length; i++){
		var canvasCells = a.childNodes;
		var touchEvent = gridOptionTouchs[i];		
		for (var row = 0; row < l; row++) {
			for (var col = 0; col < l; col++) {
				if( row + touchEvent.noOfRows < 10 && col + touchEvent.noOfCols < 10){
					noSnapGrid = touchEvent.checkForOverlap(canvasCells[row * 10 + col], row, col);
					this.mappedCells = undefined;
					if(noSnapGrid){
						return false;
					}
				}
			}
		}		
	}
	return true;
}


function checkForLineMatch(rowIndex, colIndex) {

    if (appG.row[rowIndex] === 10) {

        appG.score += 10;
        cleanGridCells(rowIndex, undefined);
        appG.row[rowIndex] = 0;
        for(i=0; i < 10; i++){			
			if(colIndex == i && appG.col[i] == 10){
				appG.col[i] = appG.col[i] +1;
			}
			appG.col[i] = appG.col[i] -1;
        }
    }
    if (appG.col[colIndex] === 10) {
        appG.score += 10;
        cleanGridCells(undefined, colIndex);
        appG.col[colIndex] = 0;
		for(i=0; i < 10; i++){
			if(rowIndex == i && appG.row[i] == 0){
				appG.row[i] = appG.row[i] +1;
			}
			appG.row[i] = appG.row[i] -1;
        }
    }
    updateScore();


}

function animationEndEvent(event){
	var element = event.target;
	replaceClass(element, 'gridItem\\S*', " " + CONSTS.GridItem0Cell);
	element.removeEventListener("webkitAnimationEnd", animationEndEvent);
	element.removeEventListener("animationend"      , animationEndEvent);
	element.style["-webkit-animation"] = "";
}

function cleanGridCells(rowIndex, colIndex) {
    
    if (typeof rowIndex !== "undefined") {
        for (var i = 0; i < 10; i++) {
            var ele = document.getElementById("gridEle_" + rowIndex + "_" + i);            
            ele.addEventListener("webkitAnimationEnd", animationEndEvent);
            ele.addEventListener("animationend"      , animationEndEvent);
            ele.style["-webkit-animation"] = "clearCell 1s forwards";
            appG.GridCanvasItems[rowIndex][i] = CONSTS.GridItem0Cell;
        }
    
    }
    if (typeof colIndex !== "undefined") {
        for (var i = 0; i < 10; i++) {
            var ele = document.getElementById("gridEle_" + i + "_" + colIndex);
			ele.addEventListener("webkitAnimationEnd", animationEndEvent);
			ele.addEventListener("animationend"      , animationEndEvent);
           	ele.style["-webkit-animation"] = "clearCell 1s forwards";            
            appG.GridCanvasItems[i][colIndex] = CONSTS.GridItem0Cell;
        }
    }


}
function updateScore() {
    var ele = document.getElementById("score");
    ele.innerHTML = appG.score;
    if (appG.score >= appG.maxScore) {
        appG.maxScore = appG.score;
        ele = document.getElementById("maxScore");
        ele.innerHTML = appG.maxScore;
    }

}


function replaceClass(element, className, newClass) {
    element.className = 
    element.className.replace
    (new RegExp("(?:^|\\s)" + className + "(?!\\S)","g"), newClass ? newClass : "")
}
