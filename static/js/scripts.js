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
  return this.crustName + " " + this.sizeName + " " + this.toppingName + " pizza";
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

  var selectedPizzaTopping = $("select#selected-topping").val();
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

  var totalPrice = parseInt( 500 + crustPrice +  toppingPrice + sizePrice );





  $(".dummyDescription").hide();
  $(".dummyPrice").hide();
  $(".pDescription").append(newPizzaSelection.fullPizzaDescription() ).hide().fadeIn(2000);
  $(".price").append("Ksh. " + totalPrice). hide().fadeIn(2000);
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
  function Item(selectedPizza, price, count) {
    this.pizza = selectedPizza;
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
  

  // =============================
  // Public methods and propeties
  // =============================
  var obj = {};
  
  // Add to cart
  obj.addItemToCart = function(selectedPizza, price, count) {
    for(var item in cart) {
      if(cart[item].pizza === selectedPizza) {
        cart[item].count ++;
        saveCart();
        return;
      }
    }
    var item = new Item(selectedPizza, price, count);
    cart.push(item);
    saveCart();
  }
  // Set count from item
  obj.setCountForItem = function(selectedPizza, count) {
    for(var i in cart) {
      if (cart[i].pizza === selectedPizza) {
        cart[i].count = count;
        break;
      }
    }
  };
  // Remove item from cart
  obj.removeItemFromCart = function(selectedPizza) {
      for(var item in cart) {
        if(cart[item].pizza === selectedPizza) {
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
      + "<td>" + cartArray[i].name + "</td>" 
      + "<td>(" + cartArray[i].price + ")</td>"
      + "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-name=" + cartArray[i].name + ">-</button>"
      + "<input type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
      + "<button class='plus-item btn btn-primary input-group-addon' data-name=" + cartArray[i].name + ">+</button></div></td>"
      + "<td><button class='delete-item btn btn-danger' data-name=" + cartArray[i].name + ">X</button></td>"
      + " = " 
      + "<td>" + cartArray[i].total + "</td>" 
      +  "</tr>";
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





