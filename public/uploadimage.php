<?php
$servername="localhost";
$username="root";
$password="";
$database_name="database1234";
$conn=mysqli_connect($servername,$username,$password,$database_name);
if(!$conn)
{
    die("Connection Failed" . mysqli_connect_error());
}
if(isset($_POST['save']))
{
    $name = $_POST['name'];
    $city =  $_POST['city'];
    $email =  $_POST['email'];
    $mobile_no =$_POST['mobile_no'];
    $pres = isset($_FILES['pres']);

    
    $sql_query = "INSERT INTO upload_prescription (name,city,email,mobile_no,pres)
    VALUES('$name','$city','$email','$mobile_no','$pres')";
    if(mysqli_query($conn,$sql_query))
    {
        echo "We will get back to you as soon as possible! ";
    }
    else{
        echo "Error: " . $sql . "" . mysqli_error($conn);
    }
    mysqli_close($conn);

}
?>