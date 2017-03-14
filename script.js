document.getElementById("bad").style.display="none";
document.getElementById("good").style.display="none";

/*
HOW IT WORKS
In layman's terms: If a question has no radio buttons checked, ask the user to make required selection,
and color the appropriate label red.

Trying this: http://stackoverflow.com/questions/42140609/validate-dynamically-named-radio-buttons-using-javascript/42141028#42141028

I tried converting the button element to a div. It always comes up with "bad" message...
*/

function submitForm() {
  // define the form variable
  var form = document.getElementsByName("quality")[0];

  if((!form.style[0].checked)  && (!form.style[1].checked) && (!form.style[2].checked))  {
document.getElementById("good").style.display="none";
  document.getElementById("bad").style.display="block";
  } else {
	  document.getElementById("bad").style.display="none";
document.getElementById("good").style.display="block"; 
  }
}

document.getElementById("btnSubmit").onclick=function()
{
	submitForm();
};
