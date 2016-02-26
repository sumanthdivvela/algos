function createGridCanvas() {
    var a = document.getElementById("gridCanvas");
    var l = 10;
    var gridHtml = "";
    for (let i = 0; i < l; i++) {
        for (let j = 0; j < l; j++) {
            gridHtml = gridHtml + createGridCell("cell gridCell", i, j)
        }
    }
    a.innerHTML = gridHtml;
}

function createGridCell(skin, r, c) {
    return `<div class='${skin ? skin : cell}' data-cell='${r},${c}'></div>`
}

function appOnload() {
    createGridCanvas();
    createGridOptions();
}


function createGridOptions() {

    unRegisterTouchEvents();

    var randList = randItems();
    
    var l = randList.length;
    var gridHtml = "";
    var gridOption;
    var gridOptionRow;
    var gridOptionCol;
    var width = 0;
    var height = 0;
    var cellMinSize = 20;
    for (let i = 0; i < l; i++) {
        gridOption = randList[i];
        width = gridOption.length > width ? gridOption.length : width;
        for (let w = 0; w < gridOption.length; w++) {
            gridOptionRow = gridOption[w];
            height = gridOptionRow.length > height ? gridOptionRow.length : height;
            for (let h = 0; h < gridOptionRow.length; h++) {
                gridOptionCol = gridOptionRow[h];
                gridHtml = gridHtml + createGridCell("cellMin " + gridOptionCol, w, h)
            }
        }
        var a = document.getElementById("gridProbItem" + i);
        a.innerHTML = gridHtml;
        a.style = "width:" + (width * cellMinSize) + "px;height:" + (height * cellMinSize) 
        + "px; left:" + ((a.parentElement.offsetWidth - (width * cellMinSize)) / 2) + "px;";
        gridHtml = "";
        width = 0;
        height = 0;
    }
    registerTouchEvents(l)
}

function gridOptionSelect(element){
    var childs = element.child
}


function registerTouchEvents(l) {
    for (let i = 0; i < l; i++) {
        var a = document.getElementById("gridProbItem" + i);
        touch.eventList.push(new DragDrop(a));
    }
}

function unRegisterTouchEvents() {
    var l = touch.eventList.length;
    for (let i = 0; i < l; i++) {        
        touch.eventList[i].removeEvent();
    }
    touch.eventList = [];
}

var gridItem1Cell = "gridItem1Cell";
var gridItem2Cell = "gridItem2Cell";
var gridItem3Cell = "gridItem3Cell";
var gridItem4Cell = "gridItem4Cell";
var gridItem5Cell = "gridItem5Cell";
var gridItem6Cell = "gridItem6Cell";
var gridItem7Cell = "gridItem7Cell";
var gridItemEmpty = "gridItemEmpty";

var gridItems = [
//Item 1 : 4 cell Square;
[[gridItem1Cell, gridItem1Cell], [gridItem1Cell, gridItem1Cell]], 
//Item 2 : inverted L;
[[gridItem2Cell, gridItem2Cell], [gridItem2Cell, gridItemEmpty]], 
//Item 3 : 3 cell horizental line;
[[gridItem3Cell, gridItem3Cell, gridItem3Cell]], 
//Item 4 : 4 cell horizental line;
[[gridItem4Cell], [gridItem4Cell], [gridItem4Cell], [gridItem4Cell], [gridItem4Cell]], 
//Item 5 : 5 cell vertical line;
[[gridItem5Cell, gridItem5Cell, gridItem5Cell, gridItem5Cell, gridItem5Cell]], 

//Item 6 : 9 cell square ;
[[gridItem6Cell, gridItem6Cell, gridItem6Cell], 
[gridItem6Cell, gridItem6Cell, gridItem6Cell], 
[gridItem6Cell, gridItem6Cell, gridItem6Cell]], 

[[gridItem7Cell]], 
];


function trail(prob) {
    var rand = Math.random();
    if (((rand / prob)) > 1)
        return false;
    return true;
}


function randItems() {
    var randList = [];
    for (let i = 0; i < 100; i++) {
        if (trail(1 / 6)) {
            randList.push(gridItems[i % 7]);
            if (randList.length === 3) {
                return randList;
            }
        }
    }
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
    this.startLeft = element.style.left;
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
    },
    
    onTouchMove: function(event) {
       var element = this.element;
       var touchEvent = event.touches && event.touches[0] || event;
       this.x2 = touchEvent.pageX || touchEvent.clientX;
	   this.y2 = touchEvent.pageY || touchEvent.clientY; 

       element.style.left = (this.x2-this.x1) + "px";
       element.style.top = (this.y2-this.y1) + "px";

    },
    
    onTouchEnd: function(event) {
        var element = this.element;
        element.style.left = this.startLeft;         
        element.removeEventListener(touch.events.touchmove, this, false);
        element.removeEventListener(touch.events.touchend, this, false);
        element.removeEventListener(touch.events.touchcancel, this, false);
    },

    removeEvent: function(){
        this.element.removeEventListener(touch.events.touchstart, this, false);
    }
}



function removeClass(element, className){
   element.className =
   element.className.replace
      ( "/(?:^|\s)"+className + "(?!\S)/g" , '' )
}
