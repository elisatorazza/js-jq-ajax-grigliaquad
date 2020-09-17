$(document).ready(function() {

$(".genera").click(function(){
  var selectedButton = $(this);
  $.ajax(
 {
 "url": "https://flynn.boolean.careers/exercises/api/random/int",
 "method": "GET",
 "success": function (data, stato) {
   $(".genera").addClass("none");

   var numero = data["response"];
   selectedButton.next().text(numero);
   if (numero <= 5){
     selectedButton.parents(".box").addClass("yellow");
   } else {
     selectedButton.parents(".box").addClass("green");
   }
 },
 "error": function (richiesta, stato, errori) {

 }
 }
);


})








  })
