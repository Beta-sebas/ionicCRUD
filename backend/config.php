<?php 

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
header('Access-Control-Allow-Headers: token, content-Type');
header('Access-Control-Max-Age: 172800');
header('Content-Length: 0');
header('Content-Type: text/plain');

//$conn = mysqli_connect("localhost", "root", "", "ionic-php-crud") or die("no se logro conectar a la db");
try {
    $conn = new PDO("mysql:host=localhost;dbname=ionic-php-crud", 'root', '');
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (Exception $e) {
    echo "Error :". $e->getMessage();
}
         
?>