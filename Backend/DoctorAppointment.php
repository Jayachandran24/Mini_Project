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


    $conn = new mysqli($servername,$username,$password,$mydb);
    if(!$conn){
        $data['status'] = "not ok";
        $data['message'] = "unable to connect to database";
    }else{

        $sql="select * from appointmentbooking where doctor ='Dr.Balaji'";
        // $sql="select * from appointmentbooking";
        $result =mysqli_query($conn,$sql);
        // $row = mysqli_fetch_array($result);
       $json_array = array();
        while($row = mysqli_fetch_assoc($result))
        {
            $json_array[] =  $row;
        }
    

        // var_dump($result);
        if($result && mysqli_num_rows($result) > 0){
            $data['status'] = "ok";
            $data['message'] = "values got";
            $data['values'] = ($json_array);
        }else{
            $data['message'] = "values not get";
        }

    }
    echo json_encode($data);
    
    
?>