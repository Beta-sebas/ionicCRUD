<?php

include "config.php";
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();
$year = $data['year'];
$studentOne = $data['studentOne'];
$studentTwo = $data['studentTwo'];
$id = $_GET['id'];

//$q = mysqli_query($conn, "UPDATE estudiantes SET (year, studentOne, studentTwo) VALUES ('$year', '$studentOne', '$studentTwo') WHERE id = $id LIMIT 1");
try{
    $q = $conn->prepare("UPDATE estudiantes SET year='$year', studentOne='$studentOne', studentTwo='$studentTwo' WHERE id = $id LIMIT 1");
    $q->execute();
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