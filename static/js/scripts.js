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
function PizzaType(crust, size, topping){
  this.crustName = crust;
  this.toppingName = topping;
  this.sizeName = size;
  this.price = [];
}

//pizza type prototype
PizzaType.prototype.fullPizzaDescription = function(){
  return this.crustName + " " + this.sizeName + " sized pizza with "  + this.toppingName + " toppings";
}


// On form submit actions
$("form#pizza-data-form").submit(function(event) {
  event.preventDefault();
  var toppingList = [];
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

  $(".dummyDescription").hide();
  $(".dummyPrice").hide();
  $(".pDescription").append("<li>" + newPizzaSelection.fullPizzaDescription() ).hide().fadeIn(2000) +  "</li>";
  $(".pDescription").append("Ksh. " + totalPrice).show();
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

  var totalPrice = parseInt( 500 + crustPrice + totalP +  sizePrice );

  var totalOnDelivery = parseInt(totalPrice + 100);

  person = prompt("Please enter your name:");
  phoneN = prompt("Please enter your phone number:");

  if (confirm("Want it delivered?")) {
    if(confirm("Delivery cost is Ksh. 100. Confirm to proceed")){
    alert ("Your total cost on delivery is: " + totalOnDelivery);

    output = prompt("Please enter your delivery address:");
    alert ("Thank you " + person + " for shopping with FleekyBite pizza.Your pizza will be delivered to " + output + ". Enjoy and welcome again.");
    
  }


  }
  else{
    alert ("Thank you " + person + " for shopping with FleekyBite pizza.Your pizza is waiting for you. Enjoy and welcome again.");
  }

  


  
 
});


// Modal event
$('select').on('change', function() {
  if ($(this).val() === 'yes') {
    $(".pDescription").show();
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
      alert (name + ", thankyou for shopping with FleekyBite pizza.Your pizza is waiting for you. Enjoy and welcome again.");
    }
    
    $('form#details-form').get(0).reset();
    $("#cart-details .no-delivery-btn").hide();
    $("#cart-details .total-cost").hide();
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
      alert("Please enter your name!")
    }
    else if (!$("#details-form input#user-number").val()){
      alert("Please enter your phone number!");
    }

    else if (!$("input#user-address").val()){
      alert("Please enter your delivery address!");
    }
    else{
      alert (name + ", thankyou for shopping with FleekyBite pizza.Your pizza will be delivered to " + address + ". Enjoy and welcome again.");
    }
    
    $('form#shipping-details-form').get(0).reset();
    $('form#details-form').get(0).reset();
    $("#shipping-details img").fadeIn(2000);
    $(".shipping-form").hide();
    $('#exampleModal').modal('hide');


    return false;
    
  });

});


// ************************************************
// Shopping Cart function
// ************************************************

var shoppingCart = (function() {
  
  cart = [];
  
  // Constructor
  function Item(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
  }
  
  // Save cart
  function saveCart() {
    sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
  }
  
    // Load cart
  function loadCart() {
    cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
  }
  if (sessionStorage.getItem("shoppingCart") != null) {
    loadCart();
  }
  

  var obj = {};
  
  // Add to cart
  obj.addItemToCart = function(name, price, count) {
    for(var item in cart) {
      if(cart[item].name === name) {
        cart[item].count ++;
        saveCart();
        return;
      }
    }
    var item = new Item(name, price, count);
    cart.push(item);
    saveCart();
  }
  // Set count from item
  obj.setCountForItem = function(name, count) {
    for(var i in cart) {
      if (cart[i].name === name) {
        cart[i].count = count;
        break;
      }
    }
  };
  // Remove item from cart
  obj.removeItemFromCart = function(name) {
      for(var item in cart) {
        if(cart[item].name === name) {
          cart[item].count --;
          if(cart[item].count === 0) {
            cart.splice(item, 1);
          }
          break;
        }
    }
    saveCart();
  }

  // Remove all items from cart
  obj.removeItemFromCartAll = function(name) {
    for(var item in cart) {
      if(cart[item].name === name) {
        cart.splice(item, 1);
        break;
      }
    }
    saveCart();
  }

  // Clear cart
  obj.clearCart = function() {
    cart = [];
    saveCart();
  }

  // Count cart 
  obj.totalCount = function() {
    var totalCount = 0;
    for(var item in cart) {
      totalCount += cart[item].count;
    }
    return totalCount;
  }

  // Total cart
  obj.totalCart = function() {
    var totalCart = 0;
    for(var item in cart) {
      totalCart += cart[item].price * cart[item].count;
    }
    return Number(totalCart.toFixed(2));
  }

  // List cart
  obj.listCart = function() {
    var cartCopy = [];
    for(i in cart) {
      item = cart[i];
      itemCopy = {};
      for(p in item) {
        itemCopy[p] = item[p];

      }
      itemCopy.total = Number(item.price * item.count).toFixed(2);
      cartCopy.push(itemCopy)
    }
    return cartCopy;
  }

 
  return obj;
})();


// *****************************************
// Triggers / Events
// ***************************************** 
// Add item
$('.add-to-cart').click(function(event) {
  event.preventDefault();
  var name = $(this).data('name');
  var price = Number($(this).data('price'));
  shoppingCart.addItemToCart(name, price, 1);
  displayCart();
});

// Clear items
$('.clear-cart').click(function() {
  shoppingCart.clearCart();
  displayCart();
});


function displayCart() {
  var cartArray = shoppingCart.listCart();
  var output = "";

                               
  for(var i in cartArray) {
    output += "<tr>"
      + "<div id = 'product-description'>" + cartArray[i].name + "</div>" 
      + "<div id='input-item'>" + cartArray[i].name + "> "
      + "<input type='number' value = 1 data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
      + "</div>" 
      + "<div id = 'number-selected'> (" + cartArray[i].price + ")</div>"

      ;
  }
  $('.show-cart').html(output);
  $('.total-cart').html(shoppingCart.totalCart());
  $('.total-count').html(shoppingCart.totalCount());
}

// Delete item button

$('.show-cart').on("click", ".delete-item", function(event) {
  var name = $(this).data('name')
  shoppingCart.removeItemFromCartAll(name);
  displayCart();
})


// -1
$('.show-cart').on("click", ".minus-item", function(event) {
  var name = $(this).data('name')
  shoppingCart.removeItemFromCart(name);
  displayCart();
})
// +1
$('.show-cart').on("click", ".plus-item", function(event) {
  var name = $(this).data('name')
  shoppingCart.addItemToCart(name);
  displayCart();
})

// Item count input
$('.show-cart').on("change", ".item-count", function(event) {
   var name = $(this).data('name');
   var count = Number($(this).val());
  shoppingCart.setCountForItem(name, count);
  displayCart();
});

displayCart();
