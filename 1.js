var button = document.getElementById("Enter-Values")
button.onclick = function(){
  var x= window.prompt("Enter 1st Number: ");
  var y= window.prompt("Enter 2nd Number: ");
  var z= window.prompt("Enter 3rd Number: ");
  if (x>y && x>z)
  {
          if (y>z)
          {
              alert(x + ", " + y + ", " +z);
          }
          else
          {
              alert(x + ", " + z + ", " +y);
          }
  }
  else if (y>x && y >z)
  {
          if (x>z)
          {
               alert(y + ", " + x + ", " +z);
          }
          else
          {
               alert(y + ", " + z + ", " +x);
          }
  }
  else if (z>x && z>y)
  {
          if (x>y)
          {
              alert(z + ", " + x + ", " +y);
          }
          else
          {
              alert(z + ", " + y + ", " +x);
          }
  }
}
