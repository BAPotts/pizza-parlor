//Business Logic-----------

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.price = function() {
  let price;
  if (this.size === "large"){
    price = 12;
  } else if (this.size === "medium"){
    price = 10;
  } else {
    price = 8;
  }
  for(i=0;i < this.toppings.length; i++){
    price += 2;
  }  
  return price;
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
  let price = newPizza.price();
  alert(price);
  })
})