//back end logic
function pingpong(number) {

    result = [];
    for (var i = 1; i <= number; i++) {
        if (i % 15 == 0) {
            result.push("ping-pong");
        } else if (i % 5 == 0) {
            result.push("pong");
        } else if (i % 2 == 0) {
            result.push("even");
        } else {
            result.push(i);
        }
        
        
        
    };
    return result;
};


function displayResults(results) {

    listResults = document.createElement('ol');

    for (var i = 0; i < result.length; i++) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(results[i]));
        listResults.appendChild(li);
    }
    return listResults;
};
//user front end
$(document).ready(function() {
    $("form#pinpong").submit(function(event) {
  
      event.preventDefault();
      $("#result").empty();
      $(".place a whole number").hide();
  
      var inputNumber = parseInt($("input").val());
  
      if (inputNumber < 0) {
        $("wrong").show();
        $("wrong").text("do nothing");
       } else {
        pingpong(inputNumber);
 
      
       $("#result").show();
       $("#result").append(displayResults(result));
      }
    });
  });