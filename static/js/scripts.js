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
function PizzaType(crust, size, topping){
  this.crustName = crust;
  this.toppingName = topping;
  this.sizeName = size;
  this.price = [];
}

//pizza type prototype
PizzaType.prototype.fullPizzaDescription = function(){
  return this.crustName + " " + this.sizeName + " size pizza with "  + this.toppingName + " toppings";
}


//Pizza price constructor
// function PizzaPrice(crustPrice, toppingPrice, sizePrice){
//   this.crustP = crustPrice;
//   this.toppingP = toppingPrice;
//   this.sizeP = sizePrice;
// }

// //pizza price prototype
// PizzaPrice.prototype.totalPrice = function(){
//   return 500 + this.crustP +  this.toppingP + this.sizeP;
// }



// On form submit actions
$("form#pizza-data-form").submit(function(event) {
  event.preventDefault();
  var toppingList = [];
    $.each($(".form-check-input:checked"), function(){
        toppingList.push($(this).val());
  });
  var selectedPizzaTopping = toppingList;
  var selectedPizzaCrust= $("select#selected-crust").val();
  var selectedPizzaSize= $("select#selected-size").val();
  var newPizzaSelection= new PizzaType(selectedPizzaCrust, selectedPizzaSize, selectedPizzaTopping);


    // Topping price
  if (selectedPizzaTopping === "italian sausage"){
    toppingPrice = 200;
  }
  else if (selectedPizzaTopping === "bacon"){
    toppingPrice = 150;
  }
  else if (selectedPizzaTopping === "cheese & garlic"){
    toppingPrice = 100;
  }else if (selectedPizzaTopping === "potato & rosemary"){
    toppingPrice = 100;
  }else if (selectedPizzaTopping === "pepperoni"){
    toppingPrice = 100;
  }
  else if (selectedPizzaTopping === "onion & green pepper"){
    toppingPrice = 50;
  }

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

  // var totalPrice = parseInt( 500 + crustPrice +  toppingPrice + sizePrice );





  $(".dummyDescription").hide();
  $(".dummyPrice").hide();
  $(".pDescription").append(newPizzaSelection.fullPizzaDescription() ).hide().fadeIn(2000);
  // $(".price").append("Ksh. " + totalPrice). hide().fadeIn(2000);
  $("#cart-btn").fadeIn(1000);



  document.getElementById("pizza-data-form").reset();
 
});


// On add to cart actions
$(".pizza-card .add-to-cart").click(function(event) {
  event.preventDefault();
  $(".pDescription").hide().empty();
  $(".price").hide().empty();
  $("#cart-btn").hide();
  $(".dummyDescription").fadeIn(500);
  $(".dummyPrice").fadeIn(1000);

  
 
});


      // newPizzaType.addresses.push(newAddress)


// Calculate pizza prices

// var crust = {
//   crispy: 250,
//   stuffed: 150,
//   glutenFree: 100,
//   flatBread: 50
// }; 

// var toppings = {
//   chicken: 250,
//   beef: 150,
//   cheeseAndGarlic: 100,
//   potatoAndRosemary: 100,
//   pepperoni:100,
//   onionAndGreenPepper:50

// }; 

// var size = {
//   small: 0,
//   medium: 100,
//   large: 300,
// }; 


// Modal event
$('select').on('change', function() {
  if ($(this).val() === 'yes') {
    $("#shipping-details img").hide();
    $(".shipping-form").fadeIn(2000);
    $("#cart-details .total-cost").hide();
    $("#cart-details .no-delivery-btn").hide();
    $(".shipping-form").css("align-items", "centre");



  }
  else{
    $("#shipping-details img").fadeIn(2000);
    $(".shipping-form").hide();
    $("#cart-details .total-cost").fadeIn(2000);
    $("#cart-details .no-delivery-btn").fadeIn(2000);


  }
  
});

