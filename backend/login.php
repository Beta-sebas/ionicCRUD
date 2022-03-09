<?php

include "config.php";


if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $input = file_get_contents('php://input');
    $data = json_decode($input, true);

    $usuario = $data['usuario'];
    $password = hash("sha256", $data['password']);
  

    try{
    $q = $conn->prepare("SELECT * FROM usuarios  WHERE usuario = '{$usuario}' and password = '{$password}' LIMIT 1");
    $q->execute();
    $row = $q->fetch(PDO::FETCH_ASSOC);
    } catch (Exception $e) {
        echo "Error :". $e->getMessage();
        http_response_code(422);
    }

    if ($row) {
        //$user = $row['usuario'];
        http_response_code(201);
        $message = array('status' => true, 'msj' => "correcto", 'logueado' => array( 'user' => $row['usuario'], 'login' => true ) );
    } else {        
        $message = array('status' => false, 'msj' => "Usuario o contraseña incorrectos" );
        
    }
    echo json_encode($message);
}



die();
