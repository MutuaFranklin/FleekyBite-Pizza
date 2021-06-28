// Slide transition
$(document).ready(function(){
  $('#carousel-home').carousel({
    interval: 2000
  })
});    


$(function(){
  var $targetElement = $(".pizza-types nav .navbar-nav li a");           
  $targetElement.click(function() {
     $targetElement.removeClass("changeColor");
     $(this).addClass("changeColor");
  });
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
function PizzaType(crust, size, topping, price){
  this.crustName = crust;
  this.toppingName = topping;
  this.sizeName = size;
  this.price = price;
}

//pizza type prototype
PizzaType.prototype.fullPizzaDescription = function(){
  return this.crustName + " " + this.sizeName + " sized pizza with "  + this.toppingName + " toppings";
}


var pizzaValues = [].map(parseInt);
var net = 0;
 



// On form submit actions
$("form#pizza-data-form").submit(function(event) {
  event.preventDefault();
  var toppingList = [];
  var price = []
  
  price.push(totalPrice);

    $.each($(".form-check-input:checked"), function(){
        toppingList.push($(this).val());
  });

  var selectedPizzaTopping = toppingList.join(", ");
  var selectedPizzaCrust= $("select#selected-crust").val();
  var selectedPizzaSize= $("select#selected-size").val();
  var newPizzaSelection= new PizzaType(selectedPizzaCrust, selectedPizzaSize, selectedPizzaTopping);
 

  // Topping prices

  var toppingPrices = selectedPizzaTopping;

  if ( toppingPrices.includes("Italian Sausage")){
    italianPrice = 200;
  }
  else{
    italianPrice = 0;

  }
  if ( toppingPrices.includes("Bacon")){
    baconPrice = 150;
  }
  else{
    baconPrice = 0;

  }
  if ( toppingPrices.includes("Cheese & garlic")){
    cheesePrice = 100;
  }
  else{
    cheesePrice = 0;

  }
  if ( toppingPrices.includes("Potato & rosemary")){
    potatoPrice = 100;
  }
  else{
    potatoPrice = 0;

  }
  if ( toppingPrices.includes("Pepperoni")){
    pepperoniPrice = 100;
  }
  else{
    pepperoniPrice = 0;

  }
  if ( toppingPrices.includes("Onion & green pepper")){
    onionPrice = 50;
  }
  else{
    onionPrice = 0;

  }

  totalP = (italianPrice + baconPrice + cheesePrice + potatoPrice + pepperoniPrice +onionPrice );
  

  // Crust price

  if (selectedPizzaCrust === "Crispy"){
    crustPrice = 250;
  }
  else if (selectedPizzaCrust === "Stuffed"){
    crustPrice = 150;
  }
  else if (selectedPizzaCrust === "Gluten-free"){
    crustPrice = 100;
  }else if (selectedPizzaCrust === "Flat-bread"){
    crustPrice = 50;
  }

  // Size price
  if (selectedPizzaSize === "small"){
    sizePrice = 0;
  }
  else if (selectedPizzaSize === "medium"){
    sizePrice = 100;
  }
  else if (selectedPizzaSize === "large"){
    sizePrice = 300;
  }

  var totalPrice = parseInt( 500 + crustPrice + totalP +  sizePrice );


  
  if (confirm(newPizzaSelection.fullPizzaDescription() ) + totalPrice) {
    
  }

  pizzaValues.push(totalPrice);
  for (var i = 0; i < pizzaValues.length; i++) {
     net += pizzaValues[i];
     t= net - pizzaValues[1]
  }

  totalOnDelivery = net + 100;


  console.log(pizzaValues)
  console.log(net);


  $(".dummyDescription").hide();
  $(".dummyPrice").hide();
  $(".pDescription").append("<li>" + newPizzaSelection.fullPizzaDescription() ).hide().fadeIn(2000) +  "</li>";
  $(".pDescription").append("Ksh. " + totalPrice).show();
  $("#cart-btn").fadeIn(1000);
 
  document.getElementById("pizza-data-form").reset();
  return pizzaValues = [];

 
});

 
 

// On add to cart actions
$(".pizza-card .add-to-cart").click(function(event) {
  event.preventDefault();
  $(".subtotal").append(" Subtotal: Ksh. " + net).fadeIn(2000);
  $("#selected-orders").append('</td><td id="pizzatopping">' + newPizzaSelection.selectedPizzaTopping + '</td><td id="pizzacrust">'+ newPizzaSelection.selectedPizzaCrust + '</td><td id="pizzasize">'+ newPizzaSelection.selectedPizzaSize+'</td><td id="pizzaprice">'+ totalPrice+ '</td></tr>');
  $("#cart-btn").hide();
  $(".pDescription").hide().empty();
  $(".price").hide().empty();
  $(".dummyDescription").fadeIn(500);
  $(".dummyPrice").fadeIn(1000);

  

 
});


// Modal event
$('select').on('change', function() {
  if ($(this).val() === 'yes') {
    $(".pDescription").show();
    $(".final-output").append("<p>" + "Subtotal: Ksh. " + net + "</p>");
    $(".final-output").append(" <p>" + "Shipping fee: Ksh. 100");
    $(".final-output").append("Total cost: Ksh. " + totalOnDelivery);
    $("#shipping-details img").hide();
    $(".shipping-form").fadeIn(2000);
    $("#cart-details .total-cost").hide();
    $("#cart-details .no-delivery-btn").hide();
    $(".shipping-form").css("align-items", "centre");



  }
  else{
    $("#shipping-details img").fadeIn(2000);
    $(".shipping-form").hide();
    $("#cart-details .no-delivery-btn").fadeIn(2000);


  }
  
});

// order form event
$(document).ready(function(){
  $("form#details-form").submit(function(event){
    var name = $("input#user-name").val();
    var phone = $("input#user-number").val();

    if (!$("input#user-name").val()){
      alert("Please enter your name!")
    }
    else if (!$("input#user-number").val()){
      alert("Please enter your phone number!");
    }

    else{
      alert (name + ", thank you for shopping with FleekyBite pizza.Your pizza is waiting for you. Enjoy and welcome again.");
    }
    
    $(".pDescription").hide().empty();
    $(".price").hide().empty();
    $(".subtotal").hide().empty();
    $('form#details-form').get(0).reset();
    $("#cart-details .no-delivery-btn").hide();
    $("#cart-details .total-cost").hide();
    $(".pizza-card .add-to-cart").click(function(event) {
      event.preventDefault();
      
    $("#selected-orders").append('</td><td id="pizzatopping">' + newPizzaSelection.selectedPizzaTopping + '</td><td id="pizzacrust">'+ newPizzaSelection.selectedPizzaCrust + '</td><td id="pizzasize">'+ newPizzaSelection.selectedPizzaSize+'</td><td id="pizzaprice">'+ totalPrice+ '</td></tr>');
    $("#cart-btn").hide();
    $(".dummyDescription").fadeIn(500);
    $(".dummyPrice").fadeIn(1000);
      
    
     
    });
    
    $('#exampleModal').modal('hide');

    return false;
    
  });

});


// shipping form event
$(document).ready(function(){
  $("form#shipping-details-form").submit(function(event){
    var name = $("#details-form input#user-name").val();
    var phone = $("#details-form input#user-number").val();
    var address = $("input#user-address").val();

    if (!$("#details-form input#user-name").val()){
    }
    else if (!$("#details-form input#user-number").val()){
    }

    else if (!$("input#user-address").val()){
    }
    else{
      alert (name + ", thank you for shopping with FleekyBite pizza.Your pizza will be delivered to " + address + ". Enjoy and welcome again.");
    }
    $(".subtotal").hide().empty();
    $(".pDescription").hide().empty();
    $(".price").hide().empty();
    $('form#shipping-details-form').get(0).reset();
    $('form#details-form').get(0).reset();
    $("#shipping-details img").fadeIn(2000);
    $(".shipping-form").hide();
    $('#exampleModal').modal('hide');


    return false;
    
  });

});


