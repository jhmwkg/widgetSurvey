document.getElementById("warning").style.display="none";

//Example help credit: http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_radio_checked4

/*
HOW IT WORKS
In layman's terms: If a question has no radio buttons checked, ask the user to make required selection,
and color the appropriate label red.
*/

document.getElementById("btnSubmit").onclick(function(){
	if(document.getElementById("rad").checked==false){
		
		document.getElementById("quality question").style.color="red";
	}
	
	
});

/*
var surveyCheck = document.forms[0];
var i;

    for (i = 0; i < surveyCheck.length; i++) {
        if (surveyCheck[i].!checked) {
			if ( )
            txt = txt + coffee[i].value + " ";
        }
		*/