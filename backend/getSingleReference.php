<?php
include "config.php";
$data = array();
$idreferencia = $_GET['idreferencia'];

//$q = mysqli_query($conn, "SELECT * FROM estudiantes");



//$q = $conn->prepare("SELECT * FROM estudiantes  WHERE id = $id LIMIT 1");
$q = $conn->prepare("SELECT * FROM referencias  WHERE idreferencia = $idreferencia LIMIT 1");
$q->execute();

while($row = $q->fetch(PDO::FETCH_OBJ)) {
    $data[] = $row;
}

/*while ($row = mysqli_fetch_object($q)) {
    $data[] = $row;
}*/

echo json_encode($data);
//echo mysqli_error($conn);


?>