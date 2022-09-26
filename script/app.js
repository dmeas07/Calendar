var importantIcon = "fas fa-exclamation";

var nonImportantIcon = "fas fa-thumbtack";

var isImportant = false;

var visible = true;

function iconClick(){
    if(isImportant  == false){
        // change to important
        $("#btnChangeIcon").removeClass(nonImportantIcon).addClass(importantIcon);
        isImportant = true;
        console.log("is important")
    
    }

    else{
        // change to non important
        $("#btnChangeIcon").removeClass(importantIcon).addClass(nonImportantIcon);
        isImportant = false;
        console.log("is not important")
    }
}

function hide(){
    if(visible){

        $("#hideMe").hide(".paragraph");

        visible = false;

        console.log("hidden");

    }

    else{
        
        $("#hideMe").show(".paragraph");

        visible = true;
        
        console.log("reveal");
    }
}

function saveTask(){
    console.log("button clicked");
}
function init(){
    console.log("Task Manager");

    // load prev data

    // catch events
    $(".btnSave").click(saveTask);
    $("#btnChangeIcon").click(iconClick);
    $("#hideBtnBtn").click(hide)

}

window.onload = init;