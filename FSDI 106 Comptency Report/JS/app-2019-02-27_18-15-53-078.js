// this file contains the actual logic for the store

function displayCatalog(){
    // get data
    //(no need for now, data is on DB variable)

    // loop over the data 
    for(var i=0; i<DB.length; i++){
        //display the item
        var theItem = DB[i];
        displayItem(theItem);
    }
}
// should display the item on the screen...create the DOM element for the item
function displayItem(item){
    var itemHtml = `<div class="item">
                        <h4>${item.name}</h4>
                    </div>`;
    $("#item-list").append(itemHtml);
}
//JQ
/*
$(document).ready(function(){

});


//JS
*/

function init(){
    //hook events

    //initialize stuff
    displayCatalog();


}

window.onload = init;