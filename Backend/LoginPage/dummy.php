<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: *");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);

    $dev = 'development';

    if($dev == 'local'){
        $host = "localhost";
        $db = "bank";
        $user = "test";
        $pass = "Test#123";
    } else {
        $host = "mysql1006.mochahost.com";
        $db = "lanandan_bank_api";
        $user = "lanandan_Bank-API";
        $pass = "E4{u_2j)_^D*";
    }
   

    if(!empty($_POST)){

        $conn = mysqli_connect($host,$user,$pass,$db);

        http_response_code(200);

        if(!$conn){
            $data['status'] = "error";
            $data['message'] = "unable to connect to database";
        } else {
            $bank = [];

            if($_POST['bank'] == 'all'){
                $query = "SELECT * FROM `myBank` GROUP By `bank_name`";
                $query_result = mysqli_query($conn, $query);
                $i = 0;
                if (mysqli_num_rows($query_result) > 0) {
                    while($row = mysqli_fetch_assoc($query_result)){
                        $current_bank = [];
                        $current_bank['id'] = $i++;
                        $current_bank['bank_id'] = $row['bank_id'];
                        $current_bank['bank_name'] = $row['bank_name'];
                        $bank[] = $current_bank;
                    }
                }
            }

            if($_POST['bank_id']){
                $bank_id = $_POST['bank_id'];
                $query = "SELECT * FROM `myBank` WHERE bank_id = '$bank_id';";
                $query_result = mysqli_query($conn, $query);
                $i = 0;
                if (mysqli_num_rows($query_result) > 0) {
                    while($row = mysqli_fetch_assoc($query_result)){
                        $current_bank = [];
                        $current_bank['id'] = $i++;
                        $current_bank['bank_name'] = $row['bank_name'];
                        $current_bank['ifsc_code'] = $row['ifsc'];
                        $current_bank['branch'] = $row['branch'];
                        $current_bank['address'] = $row['address'];
                        $current_bank['city'] = $row['city'];
                        $current_bank['district'] = $row['district'];
                        $current_bank['state'] = $row['state'];
                        $bank[] = $current_bank;
                    }
                }
            }

            if($_POST['ifsc_code']){
                $ifsc = $_POST['ifsc_code'];
                $query = "SELECT * FROM `myBank` WHERE ifsc = '$ifsc';";
                $query_result = mysqli_query($conn, $query);
                $i = 0;
                if (mysqli_num_rows($query_result) > 0) {
                    while($row = mysqli_fetch_assoc($query_result)){
                        $current_bank = [];
                        $current_bank['id'] = $i++;
                        $current_bank['bank_name'] = $row['bank_name'];
                        $current_bank['ifsc_code'] = $row['ifsc'];
                        $current_bank['branch'] = $row['branch'];
                        $current_bank['address'] = $row['address'];
                        $current_bank['city'] = $row['city'];
                        $current_bank['district'] = $row['district'];
                        $current_bank['state'] = $row['state'];
                        $bank[] = $current_bank;
                    }
                }
            }

            $data['status'] = "ok";
            $data['message'] = "Success";
            $data['result'] = $bank;
        }
    } else {
        die();
    }
    echo json_encode($data);
?>