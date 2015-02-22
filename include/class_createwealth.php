<?php
error_reporting(0);
include_once 'config.php';
echo "sada";
// creating own object
/*$objcreateWealth = new createWealth();

$feature = $_REQUEST['feature'];
switch ($feature) {

    case 'incert_user':
        $data = $_REQUEST;
	print_r($data);
	    //$objcreateWealth->addUser($data);
        exit;
        break;
		
    default:
        break;
}
class createWealth{
	
	   function addUser($data) {
		$userName = $data['userName'];  
        $mobileNo = $data['mobileNo'];
		$emailId = $data['email'];
		$city = $data['city'];
		$product = $data['product'];
        foreach( $product as $key=>$value )
         {
			 $products[] = $value;
		 }
		$product = implode(',',$products); 
		$insertQry="INSERT INTO `user` (`user_name`, `user_mobile_no`, `user_email`, `user_city`, `user_product`) 
		                              VALUES ('{$userName}','{$mobileNo}', '{$emailId}', '{$city}', '{$product}')";
        $result = mysql_query($insertQry);
        if ($result) {
			$to = "salim@gmail.com"; 
			$subject = "Mail check";
			$message = "what want massage";
			$from = "zenphoto@example.com";
			$headers = "From:" . $from;
			mail($to,$subject,$message,$headers);
            echo "<script>window.location='../index.php?user=2'</script>";
			 
			   
        }
    }

} */
?>
