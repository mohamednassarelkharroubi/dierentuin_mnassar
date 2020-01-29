function buildGrid(cols, rows){
  
    var tableMarkup = "";

	for (x = 0; x < rows; x++) {
		tableMarkup += "<tr>";
		for (y = 0; y < cols; y++) {
			tableMarkup += "<td>&nbsp;&nbsp;&nbsp;&nbsp;</td>";
		}
		tableMarkup += "</tr>";	
	}    
    
    $("#drawing-table").html(tableMarkup)

};//end of function buildGrid

$(function() {
	
	// Variable Setup
	var cols = 0,
	    rows = 0,
	    curColor = "black",
	    mouseDownState = false,
	    eraseState = false,
	    tracingMode = false,
	    prevColor = "",
	    $el;

	
	// Dropdown for changing Grid Size
	$("#tog").click(function() {
		rows = 7;
		cols = 7;
		buildGrid(rows, cols);
	});
	
	// Clearing the Design
	$("#clear").click(function() {
		rows = 7;
		cols = 7;
		buildGrid(rows, cols);
	});

    
    	// Drawing functionality
	$("#drawing-table").delegate("td", "mousedown", function() {
		//mouseDownState = true; 
   $el = $(this);
	    if (eraseState) {
	    	$el.removeAttr("style");
	    }
       $el.css("background", curColor);

   
	}).delegate("td", "mouseenter", function() {
   //mouseDownState = true;   
		if (mouseDownState) {
			$el = $(this);
		    if (eraseState) {
		    	$el.removeAttr("style");
      } else {
		    	$el.css("background", curColor);
		    }
		}
	});
  
  
$(document).ready(function(){ 
  document.oncontextmenu = function() {return false;};

  $(document).mousedown(function(e){ 
    if( e.button == 2 ) {  
        eraseState = true;
      return false; 
    }else{
        eraseState = false;
    } 
    return true; 
  }); 

});
 

    // $('td').click(function(i){
//check td color
$("table").delegate("td", "mousedown", function(){
  var color = $(this).css('background-color');
  if (color == 'rgb(0, 0, 255)'){
    //alert(123);
    $(this).mouseup(function() {
      //alert(color);
      $(this).css( "background-color", "blue" );
    });
  }
});
  
    
 function handler(event) {
  var $target = $(event.target);
  if( $target.is("p") ) {
    curColor = $(this).attr("value");
  }
 }
  $("p").click(handler);
   
});