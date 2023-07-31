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
        $Age = $_POST['age'];
        $Gender = $_POST['gender'];
        $Weight = $_POST['weight'];
        $Sugar = $_POST['sugar'];
        $Bp = $_POST['bp'];
        $Fever = $_POST['fever'];
        $Symptoms = $_POST['symptoms'];
        $Problem = $_POST['problem'];
        $Others = $_POST['others'];


        if (!empty($Name) && !empty($Age)  && !empty($Weight) && !empty($Sugar) && !empty($Bp) && !empty($Fever) && !empty($Symptoms) && !empty($Problem) && !empty($Others)) {
            // echo("ok");
            $sql = "insert into patient_register(name,age,gender,weight,sugar,bp,fever,symptoms,problem,others)values('$Name','$Age','$Gender','$Weight','$Sugar','$Bp','$Fever','$Symptoms','$Problem','$Others')";

            $result = mysqli_query($conn, $sql);

            if ($result) {
                $data['status'] = "ok";
                $data['message'] = "Success";

            } else {
                $data['status'] = "ok";
                $data['message'] = "failed";
            }
        } else {
            $data['message'] = "wrong input";
        }
    }
} else {
    die();
}
echo json_encode($data);
?>