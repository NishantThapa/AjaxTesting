//create a function
function loadDoc() {
  //create a variable and assign new to it
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    //check if responce is ready 
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  //send request to get a responce from server
  xhttp.open("GET", "txt.txt", true);
  xhttp.send();
}
