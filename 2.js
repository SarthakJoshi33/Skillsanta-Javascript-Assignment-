
var button = document.getElementById("Enter-Values")
button.onclick = function(){
  var n = window.prompt("Enter n Number : ");
  for (var i = 0; i < n; i++) {
    if (i == 1) {
      document.write(i + " is odd <br/>");
    }
    else if (i == 2) {
      document.write(i + " is even and prime <br/>");
    }
    else if (i%2 == 0) {
      document.write(i + " is even <br/>");
      }
    else {
      for (var j = 2; j < i; j++) {
          var a=0;
        if (i%j == 0) {
          document.write(i + " is odd <br/>");
            a++;
            break;
        }
      }
        if (a==0){
          document.write(i + " is odd and prime <br/>");
        }
    }
    }
  }
