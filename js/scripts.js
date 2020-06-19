//Business Logic-----------

function Pizza(size) {
  this.size = size;
}













//UI Logic------------------
$(document).ready(function(){
$("form").submit(function(event) {
  event.preventDefault();
  const size = $("input:radio[name=pizza-size]:checked").val();
  alert(size);
  })
})