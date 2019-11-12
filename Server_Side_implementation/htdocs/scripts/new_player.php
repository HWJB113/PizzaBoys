<?php
// exit ("your hitting this page");

// insert_employee.php script designed to insert the form input from
// employee1.html (or employee.html)
$playerID = $_POST['player_ID'] ;
$password_entry = $_POST['password_new'] ;

// Convert the entered password to an encrypted password before querying the table
// Consider what the significance of 'salt_string' is?
$crypted_pass = crypt($password_entry, 'salt_string');


// Connect to the required database
// Set up the database user and password details in variables
$user = "root" ;
$pass = "" ;


// Connect to the MySQL database using this connection string
$db = new PDO('mysql:host=localhost;dbname=my_ecommerce_db', $user, $pass);


// Use this string format to check for any connection error_get_last
// Processing will stop here if an error occurs
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


// Step 1. - Prepare the SQL statement
$stmt = $db->prepare
( "insert into Players
    (UserName, currentscore, highscore, team, password)

values
    (:PlayerID,
    :0,
    :0,
    :1,
    :password_entry)" );


// Step 2. - Execute the SQL statement
$stmt->execute(array(
"UserName" => $PlayerID,
"currentscore" => 0,
"highscore" => 0,
"team" => 1,
"password_entry" => $crypted_pass
));

header("Location: ../login.update.credentials.php");
?>
