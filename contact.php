
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>SkyVista</title>
<link href="css/style.css" rel="stylesheet" type="text/css">
</head>

<body>
	<?php include("_includes/header.php"); ?>
	<?php include("_includes/nav.php"); ?>
	<main>
    <div class="contact">
      <form id="contact-form">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your Name" required>
        
        <label for="email">Email Address:</label>
        <input type="email" id="email" name="email" placeholder="Your Email" required>
        
        <label for="message">Message:</label>
        <textarea id="message" name="message" placeholder="Enter your message here" required></textarea>
        
        <p class="wordcount"><span class='characters'>100</span> characters remaining</p>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  </main>
  <?php include("_includes/footer.php"); ?>
  <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
  <script src="js/main.js"></script>
</body>
</html>