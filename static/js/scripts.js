// Slide transition
$(document).ready(function(){
  $('#carousel-home').carousel({
    interval: 2000
  })
});    

//Display and hide certain div classes
$(document).ready(function(){
  $("#topping-link").click(function(){
    $(".pizza-toppings").show();
    $(".pizza-crusts").hide();
    $(".pizza-sizes").hide();

  });

  $("#crust-link").click(function(){
    $(".pizza-toppings").hide();
    $(".pizza-crusts").show();
    $(".pizza-sizes").hide();

  });

  $("#size-link").click(function(){
    $(".pizza-toppings").hide();
    $(".pizza-crusts").hide();
    $(".pizza-sizes").show();

  });

});


//Pizza type constructor
function PizzaType(crust, topping, size){
  this.crustName = crust;
  this.toppingName = topping;
  this.sizeName = size;
  this.price = [];
}

//pizza type prototype
PizzaType.prototype.fullPizzaDescription = function(){
  return this.crustName + " " + this.sizeName + " sized " + this.toppingName + " pizza";
}


