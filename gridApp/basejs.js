var appG = {};
appG.gridOptions = [];
appG.score = 0;
appG.maxScore = localStorage.getItem("MAX_SCORE");
appG.col = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
appG.row = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


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

[[CONSTS.GridItemEmpty, CONSTS.GridItem8Cell, CONSTS.GridItem8Cell],
 [CONSTS.GridItem8Cell, CONSTS.GridItem8Cell, CONSTS.GridItemEmpty]],

[[CONSTS.GridItemEmpty, CONSTS.GridItem9Cell],
 [CONSTS.GridItem9Cell, CONSTS.GridItem9Cell],
 [CONSTS.GridItem9Cell, CONSTS.GridItemEmpty]],
];


function appOnload() {
    createGridCanvas();
    createGridOptions();
    appG.maxScore = appG.maxScore ? appG.maxScore : 0;
    var ele = document.getElementById("maxScore");
    ele.innerHTML = appG.maxScore;
}

function createGridCanvas() {
    var a = document.getElementById("gridCanvas");
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

function createGridCell(skin, r, c) {
    return `<div class='${skin ? skin : "cellSize"}' id='gridEle_${r}_${c}' ></div>`
}


function trail(prob) {
    var rand = Math.random();
    if (((rand / prob)) > 1)
        return false;
    return true;
}


function randItems() {
    var randList = [];
    for (var i = 0; i < 100; i++) {
        if (trail(1 / appG.GridOptionsList.length)) {
            randList.push(appG.GridOptionsList[i % appG.GridOptionsList.length]);
            if (randList.length === 3) {
                return randList;
            }
        }
    }
}

function createGridOptions() {
    
    unRegisterTouchEvents();
    
    var randList = randItems();
    appG.gridOptions = randList;
    var l = randList.length;
    
    var cellMinSize = 20;
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
                gridHtml = gridHtml + `<div class='${cellSkin + gridOptionCol}' ></div>`
            }
            k++;
        }    
    }

    if(!update){
        element.innerHTML = gridHtml;    
    }
    element.style = "width:auto;";
    
    var cellSize = elementChildren[0].offsetWidth + 2;
    element.style = "width:" + (width * cellSize) + "px;height:" + (height * cellSize) 
    + "px; left:" + left + "px;";

    if (update) {
        if(parentLeft + element.offsetWidth > 320){
            left = 320 - (parentLeft + element.offsetWidth) ;
        }else{
            left = ((element.parentElement.offsetWidth - (width * cellSize)) / 2);
        }
    }else{       
        left = ((element.parentElement.offsetWidth - (width * cellSize)) / 2);
    }

    element.style.left = left + "px";
}


function gridOptionSelect(element) {
    var childs = element.child
}


function registerTouchEvents(l) {
    for (var i = 0; i < l; i++) {
        var a = document.getElementById("gridProbItem" + i);
        touch.eventList.push(new DragDrop(a));
    }
}

function unRegisterTouchEvents() {
    var l = touch.eventList.length;
    for (var i = 0; i < l; i++) {
        touch.eventList[i].removeEvent();
    }
    touch.eventList = [];
}



touch = {};
touch.events = {
    touchstart: "touchstart",
    touchmove: "touchmove",
    touchend: "touchend",
    touchcancel: "touchcancel",
}
touch.eventList = [];

function DragDrop(element) {
    this.element = element;
    this.startLeft = element.offsetLeft;
    //this.snapedCell = undefined;
    //this.snapedCellXY = undefined;
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
    element.addEventListener(touch.events.touchstart, this, false);
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
        element.addEventListener(touch.events.touchmove, this, false);
        element.addEventListener(touch.events.touchend, this, false);
        element.addEventListener(touch.events.touchcancel, this, false);
        
        var touchEvent = event.touches && event.touches[0] || event;
        
        this.x1 = touchEvent.pageX || touchEvent.clientX;
        this.y1 = touchEvent.pageY || touchEvent.clientY;
        
        renderGridOption(element, "cellSize ", true,this.parentLeft);        
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
        && left < (320 - this.parentLeft - element.offsetWidth) 
        && top > -320 && top < window.screen.availHeight - 375 - element.offsetHeight) {
            element.style.left = left + "px";
            element.style.top = top + "px";
            
            this.identifyBoundingRect(left, top);
        
        }    
    },
    
    onTouchEnd: function(event) {
        var element = this.element;
        element.style.left = this.startLeft;
        element.removeEventListener(touch.events.touchmove, this, false);
        element.removeEventListener(touch.events.touchend, this, false);
        element.removeEventListener(touch.events.touchcancel, this, false);
        
        renderGridOption(element, "cellSizeMin ", true,this.parentLeft);
        element.style.left = this.startLeft + "px";
        element.style.top = "0px";
        this.snapToGridCell();
    },
    
    removeEvent: function() {
        this.element.removeEventListener(touch.events.touchstart, this, false);
    },
    
    identifyBoundingRect: function(x, y) {
        var element = this.element;
        var canvas = document.getElementById("gridCanvas");
        var colIndex = Math.round((this.parentLeft - 15 + x) / 29);
        var rowIndex = Math.round((310 + y) / 29);
        
        if (colIndex < 10 && rowIndex < 10) {
            var ele = document.getElementById("gridEle_" + rowIndex + "_" + colIndex);
            if ((colIndex + this.noOfCols) <= 10 && (rowIndex + this.noOfRows) <= 10 
				&& this.checkForOverlap(ele, rowIndex, colIndex)) {                
                this.snapOption(ele);
              //  this.snapedCell = ele;
                //this.snapedCellXY = [xi, yi];
            }else{
				this.mappedCells = undefined;
			}
        }
    },
    
    snapOption: function(canvasCell) {
        var element = this.element;
        var xi = canvasCell.offsetLeft - this.parentLeft;
        var yi = canvasCell.offsetTop - 325;
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
            /*
			if(checkForGameOver()){
				alert("Game Over.");
				window.location.reload();
			}
			*/
        }
    },
    
    checkForOverlap: function(canvasCell, rowIndex, colIndex) {
        var mappedCells = [];
        var rows = rowIndex + this.noOfRows;
        var cols = colIndex + this.noOfCols;
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
        this.mappedCells = mappedCells;
        return true;
    },
    
    removeOption: function() {
        this.removeEvent();
        this.element.innerHTML = "";
        var index = touch.eventList.indexOf(this);
        if (index > -1) {
            touch.eventList.splice(index, 1);
        }
        if (touch.eventList.length == 0) {
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
    var rowCleared = false;
    var colCleared = false;
    if (appG.row[rowIndex] === 10) {

        appG.score += 10;
        cleanGridCells(rowIndex, undefined);
        appG.row[rowIndex] = 0;
        for(i=0; i < 10; i++){
            appG.col[i] = appG.col[i] -1;
        }
        rowCleared = true;
    }
    if (appG.col[colIndex] === 10) {
        appG.score += 10;
        cleanGridCells(undefined, colIndex);
        appG.col[colIndex] = 0;
         for(i=0; i < 10; i++){             
                appG.row[i] = appG.row[i] -1;
        }
        colCleared = true;
        if(rowCleared){
            appG.col[colIndex]++; 
            appG.row[rowIndex]++;           
        }
    }
    updateScore();


}

function animationEndEvent(event){
	var element = event.target;
	replaceClass(element, 'gridItem\\S*', " " + CONSTS.GridItem0Cell);
	element.removeEventListener("webkitAnimationEnd", animationEndEvent);
	element.removeEventListener("animationend"      , animationEndEvent);
	element.style.animation = "";
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
        localStorage.setItem("MAX_SCORE", appG.maxScore);
    }

}


function replaceClass(element, className, newClass) {
    element.className = 
    element.className.replace
    (new RegExp("(?:^|\\s)" + className + "(?!\\S)","g"), newClass ? newClass : "")
}
