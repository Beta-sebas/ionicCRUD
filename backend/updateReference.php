<?php

include "config.php";
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();

// $year = $data['year'];
// $studentOne = $data['studentOne'];
// $studentTwo = $data['studentTwo'];

$idreferencia = $_GET['idreferencia'];

$titulopub = $data['titulopub'];
$autores = $data['autores'];
$tipopub = $data['tipopub'];
$eventorevista = $data['eventorevista'];
$doi = $data['doi'];
$anyopub = $data['anyopub'];



try{
    //$q = $conn->prepare("UPDATE estudiantes SET year='$year', studentOne='$studentOne', studentTwo='$studentTwo' WHERE id = $id LIMIT 1");
    $q = $conn->prepare("UPDATE referencias SET titulopub='$titulopub', autores='$autores', tipopub='$tipopub', eventorevista='$eventorevista', doi='$doi', anyopub='$anyopub' WHERE idreferencia = $idreferencia LIMIT 1");

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