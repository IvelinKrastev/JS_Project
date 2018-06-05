
function	loaderTimeout() {
    setTimeout( showPage, 1500 );
}

function	showPage() {
	document.getElementById( "loader" ).style.display 		= "none";
  	document.getElementById( "headerLoad" ).style.display 	= "block";
  	document.getElementById( "mainPage" ).style.display	= "block";
  	document.getElementById( "footerLoad" ).style.display 	= "block";

  	hasActiveUser();
}
