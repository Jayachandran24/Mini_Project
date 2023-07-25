<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: *");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);

    $servername = "localhost";
    $username = "root";
    $password = "";
    $mydb = "test";

    if(!empty($_POST)){
        $conn = new mysqli($servername,$username,$password,$mydb);
        if(!$conn){
            $data['status'] = "error";
            $data['message'] = "database not connected";
        } else {
            $Name = $_POST['name'];
            $Location = $_POST['location'];
            $Email = $_POST['email'];
            $Password = $_POST['password'];
            $Phone = $_POST['phone'];
            $Proferssion = $_POST['proferssion'];
            
            echo($Password);
            
    
            $sql = "insert into registorform(name,location,email,password,phone,proferssion)values('$Name','$Location','$Email','$Password','$Phone','$Proferssion')";
            if(mysqli_query($conn,$sql)){
                $data['status'] = "ok";
                $data['message'] = "Success";
            }
            else {
    
                $data['message'] = "failed";
            }
        }
    }else{
        die();
    }
    // if(isset($_POST['submit'])){
        
       
    // }
    echo json_encode($data);


?>