var button = document.getElementById("Enter")
button.onclick = function(){
var i,j;
  for (i = 5; i >= 1; i--) {
    for (j = i; j >= 1; j--) {
      document.write('*');
    }
    document.write('<br>');
  }
}
