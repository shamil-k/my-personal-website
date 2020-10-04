function myFunction() {
 
  var inpName = document.getElementById("name");
  if (!inpName.checkValidity()) {
    document.getElementById("nameerror").innerHTML = "Name must be fill out";
  }
  if (inpName.checkValidity()){
    document.getElementById("nameerror").innerHTML = "";
  }
  var inpEmail = document.getElementById("email");
  if(!inpEmail.checkValidity()){
    document.getElementById("emailerror").innerHTML = "Email must be fill out";
  }
  if(inpEmail.checkValidity()){
    document.getElementById("emailerror").innerHTML = "";
  }
  var inpSubject = document.getElementById("subject");

  if(!inpSubject.checkValidity()){
    document.getElementById("subjecterror").innerHTML = "Subject must be fill out";
  }
  
  else if(inpName != "" && inpEmail != "" && inpSubject != ""){
     
    document.getElementById("submit").innerHTML = "Thank you! Message has been send";
  
  
}

document.getElementById("myForm").reset();
}
