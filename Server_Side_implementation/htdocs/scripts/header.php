<?PHP
$cookie_name = "user";
?>

<!DOCTYPE html>
<html lang="en">
<head>



<title>Pizza Boys</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="icon" href="/images/favicon.png">
<style>
* {
  box-sizing: border-box;
}

body {
  font-family: monospace;
}


header {
    background:url(/images/banner.jpg) ;
    padding: 210px;
    color: black;
    font-family: monospace;
    font-size: 45px;
    object-fit: cover
}

    h2{
        font-size: 25px;
    }

nav {
  float: right;
  width: 20%;
  background: #f1f1f1;
  padding: 20px;
  font-size: 20px;
  font-family: monospace;
  color: red;
}


nav ul {
  list-style-type:circle;
  padding: 0;
}

article {
  float: left;
  padding: 20px;
  width: 80%;
  background-color: ghostwhite;
}

section:after {
  content: "";
  display: table;
  clear: both;
}

footer {
    background-color: #777;
    padding: 1px;
    text-align: right;
    color: white;
    font-family: monospace;
     padding: 10px;
}

@media (max-width: 600px) {
  nav, article {
    width: 100%;
    height: auto;
  }
}


</style>
</head>
<body>


<header>
    <img align="right" src="..\images\favicon.png" width="100" height="100" />




</header>


<section>
  <nav>
    <ul>

    <?PHP
    $cookie_name = "user";
    if(!isset($_COOKIE[$cookie_name]))
    {
    echo "<li> Hi! </li>";
    }

    else
    {
    echo "<li>Hi $_COOKIE[$cookie_name]! </li>";
    }
    ?>

      <li><a href="index.php">Home</a></li>
      <li><a href="CustomerNew.php">Sign up</a></li>
      <li><a href="login.update.credentials.php">Login/update credentials</a></li>
      <li><a href="browsecap.php">Browser Information</a></li>
      <li><a href="privacypolicy.php">Privacy Policy</a></li>
    </ul>
  </nav>

  <article>
