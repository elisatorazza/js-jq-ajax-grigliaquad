$(document).ready(function() {

$(".genera").click(function(){
  $.ajax(
 {
 "url": "https://flynn.boolean.careers/exercises/api/random/int",
 "method": "GET",
 "success": function (data, stato) {
   $(".genera").addClass("none");
   var numero = data["response"];
   $(".number").text(numero);
   if (numero <= 5){
     $(".box").addClass("yellow");
   } else {
     $(".box").addClass("green");
   }
 },
 error: function (richiesta, stato, errori) {

 }
 }
);


})








  })
