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
    $conn = new mysqli($servername,$username,$password,$mydb);

//     if($conn->connect_error) {
//         die ("connection failed:" .$conn->connect_error);
//     }
// echo("connection successfull");
        $Email = $_POST['email'];
        $Password = $_POST['password'];
        echo($Email);
        echo($Password);
        $sql = "select * from loginform where email='".$Email."' and password='" .$Password."'";

        $result = mysqli_query($conn, $sql);
        if($result && mysqli_num_rows($result) > 0){
            echo'<script>window.location.replace("/HomePage");</script>';
            // echo('done');
        }
        else {

            echo('not done');
        }


?>