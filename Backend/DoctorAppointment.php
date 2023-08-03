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


//     $name = $_GET['name'];
//     $age = $_GET['age'];
//     $email = $_GET['email'];
//     echo "Received Data from sender.php: <br>";
// echo "Name: $name <br>";
// echo "Age: $age <br>";
// echo "Email: $email <br>";
    // require_once 'PatientAppointment.php';
    // $doctor = $Doctor;
    // echo($doctor);
    // exit;

    $conn = new mysqli($servername,$username,$password,$mydb);
    if(!$conn){
        $data['status'] = "not ok";
        $data['message'] = "unable to connect to database";
    }else{
        $DocName = $_POST['docname'];
        echo ($DocName);
        //insert sql query
        // ...................
        // $sql="select * from appointmentbooking where doctor ='Doctor'";
        // $sql="select * from appointmentbooking";

        $sql = "select * from registorform INNER JOIN appointmentbooking on registorform.docname = appointmentbooking.docname where registorform.docname = appointmentbooking.docname";
        $result =mysqli_query($conn,$sql);
        // $row = mysqli_fetch_array($result);
        // $data['docname'] = $row['docname'];
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