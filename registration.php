<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");

$conn = new mysqli("localhost","root","","user");

if(mysqli_connect_error()) {
echo mysqli_connect_error();
exit();
}
else {
    $eData = file_get_contents("php://input");
    $dData = json_decode($eData,true);

    $userEmail = $dData['userNameOrEmail'];
    $userPass = $dData['userPassword'];

    $result = "";

    if($userEmail !== "" and $userPass !== "") {
        $sql = "INSERT INTO reactuser(email,pass) VALUES('$userEmail','$userPass');";
        $res = mysqli_query($conn,$sql);
        if($res) {
            $result = "You have registered successfuly";
        } else {
            $result = "";
        }
    } else {
        $result = "";
    }

    $conn -> close();
    $response[] = array("result" => $result);
    echo json_encode($response);
}
?>