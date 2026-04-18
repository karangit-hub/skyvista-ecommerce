
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>DEVICEDEPOT</title>
<link href="css/style.css" rel="stylesheet" type="text/css">
</head
    <?php include("_includes/header.php"); ?>
    <?php include("_includes/nav.php"); ?>
    <main>
        <main>
        <h1>Shopping Cart</h1>
        <div id="cart-items">
            <!-- Cart items will be displayed here dynamically -->
            <!-- Example Cart Item -->
            <div class="cart-item">
                <img src="path_to_image.jpg" alt="Product Image">
                <div class="cart-item-details">
                    <div class="cart-item-name">Product Name</div>
                    <div class="cart-item-price">$XX.XX</div>
                    <div class="cart-item-quantity">Quantity: X</div>
                </div>
                <div class="cart-item-remove">Remove</div>
            </div>
            <!-- End Example Cart Item -->
        </div>
        <div class="checkout-buttons">
            <a href="checkout.php">Proceed to Checkout</a>
            <a href="cart.php">View Cart</a>
        </div>
    </main>
    <?php include("_includes/footer.php"); ?>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
    <script src="js/main.js"></script>
</body>
</html>