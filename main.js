document.getElementById("demo-notice").addEventListener("click", () => {
  document.getElementById("demo-notice").style.display = "none";
});
$(document).ready(() => {

  $('.postText').on('keyup', (event) => {
    let post = $(event.currentTarget).val();
    let remaining = 100 - post.length;

    if (remaining <= 0) {
      $('.wordcount').addClass('red');
    } else {
      $('.wordcount').removeClass('red');
    }

    $('.characters').html(remaining);
  });

  $('.postText').focus();

});

$('.home-img img').on('mouseenter', (event) => {
  $(event.currentTarget).addClass('photo-active');
}).on('mouseleave', (event) => {
  $(event.currentTarget).removeClass('photo-active');
})


$('.dropdown-btn').on('mouseenter', () => {
  $('.drop-down').show();
});
$('.drop-down').on('mouseleave', () => {
  $('.drop-down').hide();
});

$(".option").on("click", (event) => {
  $(event.currentTarget).addClass("active");
  $(event.currentTarget).siblings().removeClass("active");

  const $closetButton = $(event.currentTarget).closest(".product");
  $closetButton.find(".cart-btn").removeClass("disabled");
});

$(".details-btn").on("click", (event) => {
  $(event.currentTarget)
    .closest(".product")
    .find(".more-details")
    .toggle(".more-details");
	
});
// Function to add item to cart
function addToCart(productName, price) {
    // Get existing cart items from session storage or initialize an empty array
    let cartItems = JSON.parse(sessionStorage.getItem('cart')) || [];

    // Add the new item to the cart
    cartItems.push({ productName, price });

    // Update session storage with the new cart items
    sessionStorage.setItem('cart', JSON.stringify(cartItems));

    // Display updated cart items
    displayCartItems();
}

// Function to display cart items on the cart page
function displayCartItems() {
    let cartItems = JSON.parse(sessionStorage.getItem('cart')) || [];
    let cartContainer = document.getElementById('cart-items');

    // Clear existing content
    cartContainer.innerHTML = '';

    // Add each item to the cart display
    cartItems.forEach(item => {
        let itemElement = document.createElement('div');
        itemElement.textContent = `${item.productName}: $${item.price}`;
        cartContainer.appendChild(itemElement);
    });
}

// Display cart items when the cart page loads
window.onload = function() {
    displayCartItems();
};
// Function to add item to cart and redirect to cart page
function addToCartAndRedirect(productName, price) {
    // Add item to cart (assuming your addToCart function is defined elsewhere)
    addToCart(productName, price);
    // Redirect to cart page
    window.location.href = "cart.php";
}
$(document).ready(function() {
    // Function to update word count
    $('#message').on('input', function() {
        var maxLength = 100; // Maximum characters allowed
        var currentLength = $(this).val().length;
        var charactersRemaining = maxLength - currentLength;
        var wordCountElement = $('.characters');

        if (currentLength > maxLength) {
            // Trim the text to the maximum length
            $(this).val($(this).val().substr(0, maxLength));
            wordCountElement.addClass('red'); // Add red color class
        } else {
            wordCountElement.removeClass('red'); // Remove red color class
        }

        // Update the word count
        wordCountElement.text(charactersRemaining);
    });
});
