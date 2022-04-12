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
    $contact_no = $_POST['contact_no'];
    $city =  $_POST['city'];

    $sql_query = "INSERT INTO entry_details (name,contact_no,city)
    VALUES('$name','$contact_no','$city')";
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