<?php

include "config.php";
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();
// $year = $data['year'];
// $studentOne = $data['studentOne'];
// $studentTwo = $data['studentTwo'];

$titulopub = $data['titulopub'];
$autores = $data['autores'];
$tipopub = $data['tipopub'];
$eventorevista = $data['eventorevista'];
$doi = $data['doi'];
$anyopub = $data['anyopub'];

// if (($eventorevista==null)){
//     $eventorevista="";
// }
// if (($doi==null)){
//     $doi="";
// }

try{
//$q = $conn->exec("INSERT INTO estudiantes (year, studentOne, studentTwo) VALUES ('$year', '$studentOne', '$studentTwo')");
$q = $conn->exec("INSERT INTO referencias (titulopub, autores, tipopub, eventorevista, doi, anyopub) VALUES ('$titulopub', '$autores', '$tipopub', '$eventorevista', '$doi', '$anyopub')");
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