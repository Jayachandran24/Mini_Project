<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

require_once 'config.php';
$servername = $Servername;
$username = $Username;
$password = $Password;
$mydb = $Mydb;

if (!empty($_POST)) {
    $conn = new mysqli($servername, $username, $password, $mydb);
    http_response_code(200);
    if (!$conn) {
        $data['status'] = "error";
        $data['message'] = "database not connected";
    } else {
        $Name = $_POST['name'];
        $Location = $_POST['location'];
        $Email = $_POST['email'];
        $Password = $_POST['password'];
        $Phone = $_POST['phone'];
        $Proferssion = $_POST['proferssion'];
        $DocName = $_POST['docname'];

        // echo($Password);

        if (!empty($Name) && !empty($Location) && !empty($Email) && !empty($Password) && !empty($Phone) && !empty($Proferssion)) {
            $sql = "insert into registorform(name,location,email,password,phone,proferssion,docname)values('$Name','$Location','$Email','$Password','$Phone','$Proferssion','$DocName')";
            $result = mysqli_query($conn, $sql);
            // $row = mysqli_fetch_assoc($result);

            if ($result) {
                $data['status'] = "ok";
                $data['message'] = "Success";

            } else {
                $data['status'] = "ok";
                $data['message'] = "failed";
            }
        } else {
            $data['error_message'] = "wrong input";
        }
    }
} else {
    die();
}
echo json_encode($data);


?>