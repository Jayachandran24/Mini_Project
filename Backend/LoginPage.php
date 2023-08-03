<?php

    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: *");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);
    

    // $servername = "localhost";
    // $username = "root";
    // $password = "";
    // $mydb = "test";
    require_once 'config.php';
    $servername = $Servername;
    $username = $Username;
    $password = $Password;
    $mydb = $Mydb; 
    // $conn = new mysqli($servername,$username,$password,$mydb);

// //     if($conn->connect_error) {
// //         die ("connection failed:" .$conn->connect_error);
// //     }
// // echo("connection successfull");
//         $Email = $_POST['email'];
//         $Password = $_POST['password'];
//         echo($Email);
//         echo($Password);
//         $sql = "select * from loginform where email='".$Email."' and password='" .$Password."'";

//         $result = mysqli_query($conn, $sql);
//         if($result && mysqli_num_rows($result) > 0){
//             // echo'<script>window.location.replace("/HomePage");</script>';
//             echo('done');
//         }
//         else {

//             echo('not done');
//         }

if(!empty($_POST)){

    $conn = new mysqli($servername,$username,$password,$mydb);

    http_response_code(200);
    if(!$conn){
        $data['status'] = "error";
        $data['message'] = "unable to connect to database";
    } else {
        $Email = $_POST['email'];
        $Password = $_POST['password'];
        // $sql = "select * from registorform where email='".$Email."' and password='" .$Password."' and proferssion = 'dev'";
        $sql = "select * from registorform where email='".$Email."' and password='" .$Password."' ";
        
        $result = mysqli_query($conn, $sql);
        $row = mysqli_fetch_assoc($result);

                if($result && mysqli_num_rows($result) > 0){
                    // if($Result['profession'] == ''){

                    // }
                    // $value = $Email;
                    // // echo ($value);
                    //   echo "<script>localStorage.setItem('Email', '$value');</script>";
                    $data['status'] = "ok";
                    $data['message'] = "Success";
                    $data['role'] = $row['proferssion'];
                    $data['docname'] = $row['docname'];

                    // //  echo "<script>localStorage.setItem('Email', '$value');</script>";
                    // $dataToSend = array(
                    //     'name' => 'John Doe',
                    //     'age' => 30,
                    //     'email' => 'john@example.com'
                    // );
                    // $queryString = http_build_query($dataToSend);
                    // $receiverUrl = 'http://localhost/miniproject/Backend/DoctorAppointment.php?'. $queryString;
                    // $response = file_get_contents($receiverUrl);
                    // echo $response;
                }
                else {
        
                    $data['message'] = "failed";
                }
    }
}else {
    die();
}
echo json_encode($data);
?>