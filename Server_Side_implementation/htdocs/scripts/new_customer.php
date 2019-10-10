<?php
// exit ("your hitting this page");

// insert_employee.php script designed to insert the form input from
// employee1.html (or employee.html)
$customerID = $_POST['customer_ID'] ;
$customername = $_POST['name'] ;
$address1 = $_POST['address_1'] ;
$address2 = $_POST['address_2'] ;
$postcode = $_POST['postcode'] ;
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
( "insert into customer
    (customerid, customername, address1, address2, postcode, password)

values
    (:customerid,
    :customername,
    :address1,
    :address2,
    :postcode,
    :password_entry)" );


// Step 2. - Execute the SQL statement
$stmt->execute(array(
"customerid" => $customerID,
"customername" => $customername,
"address1" => $address1,
"address2" => $address2,
"postcode" => $postcode,
"password_entry" => $crypted_pass
));

header("Location: ../login.update.credentials.php");
?>
