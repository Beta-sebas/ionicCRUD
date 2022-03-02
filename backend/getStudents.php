<?php
include "config.php";
$data = array();
//$q = mysqli_query($conn, "SELECT * FROM estudiantes");
$q = $conn->prepare("SELECT * FROM estudiantes");
$q->execute();

while($row = $q->fetchAll(PDO::FETCH_OBJ)) {
    $data[] = $row;
}

/*while ($row = mysqli_fetch_object($q)) {
    $data[] = $row;
}*/

echo json_encode($data);
//echo mysqli_error($conn);




?>