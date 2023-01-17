var currentNumber = 1;
var num1;
var num2;
 
 
 var $number = $(".number");
 var $screen = $("#screen")


  $number.on('click', function() {
    var numberPressed = $(this).html();
    $screen.append(numberPressed);
    
    if (currentNumber == 1) {
      if (num1 == null) {
        num1 = numberPressed
      } else {
        num1 = num1 + numberPressed;
      }
    }
    if (currentNumber == 2) {
      if (num1 == null) {
        num1 = numberPressed
      } else {
        num2 = num2 + numberPressed;
      }
    }
    

   } );



  document.getElementById("clear").onclick = function write1()
  {
    $("#screen").empty();
    num1 = null;
    num2 = null;
    currentNumber = 1;
  }
 
  document.getElementById("op+").onclick = function write1()
  {
    $("#screen").append("+");
    op = "+";
  };
  document.getElementById("op/").onclick = function write1()
  {
    $("#screen").append("/");
    op = "/";
  };
  document.getElementById("op-").onclick = function write1()
  {
    $("#screen").append("-");
    op = "-"

  };
  document.getElementById("opX").onclick = function write1()
  {   
     $("#screen").append("x");
     op = "x"
  };
  
  document.getElementById("op=").onclick = function write1()
  {   
     $screen.append("=");
     num1 = parseInt(num1);
     num2 = parseInt(num2);
      console.log(num1, op, num2);
       if (op == "+") {
        answer = num1 + num2;
      }
      if (op == "x") {
        answer = num1 * num2;
      }
      if (op == "/") {
        answer = num1 / num2;
      }
      if (op == "-") {
        answer = num1 / num2;
      }
        $screen.append(answer);
        num1 = null;
        num2 = null;
        currentNumber = 1;
      

  };

