<?php 
	$user_email = "sergey.shamrikov@gmail.com";
	
	if($_SERVER['REQUEST_METHOD'] == "POST"){

		$email = htmlspecialchars($_POST['subscribe_email']);
		$subject = isset($sc_subject) ? htmlspecialchars($sc_subject) : "Test. Newsletter";

		try{

			if(!filter_var($email, FILTER_VALIDATE_EMAIL)) throw new Exception("Ваш адрес электронной почты неверен!");

		}
		catch(Exception $e){

			echo $e->getMessage();
			die();
		}

		try{

			$headers = 'From: Test@example.com' . "\r\n" .
		   			 	'Reply-To: Test@example.com' . "\r\n";
		   	$msg = "Email address: $email";

			if(mail($user_email, $subject, $msg, $headers)) throw new Exception("Your email address has been successfully sent!");
			else throw new Exception("Connection to server is failed!");

		}
		catch(Exception $e){

			echo $e->getMessage();

		}

	}
	
?>