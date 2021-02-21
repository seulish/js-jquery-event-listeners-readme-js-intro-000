//define functions here
function getIt() {
  $("p").on("click", function() {
    alert("Hey!");
  })
}

function frameIt() {
  $("img").on("load", function() {
    $("img").addClass("tasty");
  })
}

function pressIt() {
  $("#typing").on("keydown", function(key) {
    if (key.which === 71) {
      alert('G key was pressed');
      return;
    }
    return;
  })
}

//function pressIt() {
//  $('#typing').on("keydown", function(press) {
//    if (press.which === 71) {
//      alert("You have entered g.");
//    }
//  })
//}


function submitIt() {
  $("form").on("submit", function() {
    alert('Your form is going to be submitted now.');
    return;
  }
}

getIt();
frameIt();
pressIt();
submitIt();

$(document).ready(function(){
  $("form").on("submit", function() {
    alert('Your form is going to be submitted now.');
    return;
  }
});
