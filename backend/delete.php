<?php

include "config.php";
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();

$id = $_GET['id'];

//$q = mysqli_query($conn, "DELETE FROM estudiantes  WHERE id = $id LIMIT 1");
try{
    $q = $conn->exec("DELETE FROM estudiantes  WHERE id = $id LIMIT 1");
    } catch (Exception $e) {
        echo "Error :". $e->getMessage();
    }
if ($q) {
    http_response_code(201);
    $message['status'] = "Success";
} else {
    http_response_code(422);
    $message['status'] = "Error";
}

echo json_encode($message);


?>