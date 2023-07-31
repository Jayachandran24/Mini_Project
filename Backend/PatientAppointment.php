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

if(!empty($_POST)){
    $conn = new mysqli($servername,$username,$password,$mydb);
    http_response_code(200);
    if(!$conn){
        $data['status'] = "error";
        $data['message'] = "database not connected";
    }else{
        $Name = $_POST['name'];
        $Email = $_POST['mail'];
        $Phone = $_POST['phone'];
        $Date = $_POST['date'];
        $Doctor = $_POST['doctor'];

       
        
        if(!empty($Name) && !empty($Email) && !empty($Phone) && !empty($Date) && !empty($Doctor)){
            $sql = "insert into appointmentbooking(name,email,phone,date,doctor)values('$Name','$Email','$Phone','$Date','$Doctor')";

            $result = mysqli_query($conn, $sql);
            if($result){
                $data['status'] = "ok";
                $data['message'] = "Success";
            }else{
                $data['message'] ="failed";
            }
        }else{
            $data['message'] = "wrong input";
        }
     }
}else{
    die();
}
echo json_encode($data);

?>