//Business Logic-----------

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}













//UI Logic------------------
$(document).ready(function(){
$("form").submit(function(event) {
  event.preventDefault();
  const size = $("input:radio[name=pizza-size]:checked").val();
  const toppings=[];
  $("input:checkbox[name=topping]:checked").each(function(){
    toppings.push($(this).val());
  
  }) 
  let newPizza = new Pizza(size, toppings);
  alert(newPizza.toppings[0]);
  })
})