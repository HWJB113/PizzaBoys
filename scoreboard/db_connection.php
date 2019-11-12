<?php
function OpenCon()
 {
 $dbhost = "localhost";
 $dbuser = "id11539686_spidey";
 $dbpass = "Pizza123";
 $db = "id11539686_pizzaboyz";
 
 $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
 
 return $conn;
 }
 
function CloseCon($conn)
 {
 $conn -> close();
 }
   
?>