<?php
$email = $_POST["email"];
$password = $_POST["password"];

// DB Connection
$conn = new mysqli('localhost', 'root', ' ', 'nodeDb');
if($conn ->connect_error){
  die('Connection Failied : ' .$conn->connect_errorr );
}
else{
  $stmt = $conn->prepare("insert into Admin(Email,Password) value( ? ,?)");
  $stmt ->bind_param("ss", $email, $password);
  $stmt ->execute();
  echo "login sucessful";
  $stmt ->close();
  $conn ->close();  
}
?>