<?php
 header("Access-Control-Allow-Origin: *");
 header("Access-Control-Allow-Headers: *");
require "PHPMailer/PHPMailerAutoload.php";
if(!empty($_POST["send"])) {
	$userName = $_POST["userName"];
	$email = $_POST["userEmail"];
	$subject = $_POST["subject"];
	$content = $_POST["content"];

	// $toEmail = "sales@scoatpharma.com";
	$toEmail = "gurramanilkumar@gmail.com";
	$mailHeaders = "From: " . $name . "<". $email .">\r\n";

function smtpmailer($to, $from, $from_name, $subject, $body)
    {
        $mail = new PHPMailer();
        $mail->IsSMTP();
        $mail->SMTPAuth = true; 
 
        $mail->SMTPSecure = 'ssl'; 
        $mail->Host = 'sg2plcpnl0236.prod.sin2.secureserver.net';
        $mail->Port = 465;  
        $mail->Username = 'admin@a3web.in';
        $mail->Password = 'iJtaz{8AF@lt';   
   
   //   $path = 'reseller.pdf';
   //   $mail->AddAttachment($path);
   
        $mail->IsHTML(false);
        $mail->From="admin@a3web.in";
        $mail->FromName=$from_name;
        $mail->Sender=$from;
        $mail->AddReplyTo($from, $from_name);
        $mail->Subject = $subject;
        $mail->Body = $body;
        $mail->AddAddress($to);
        try {
        if(!$mail->Send())
        {
            $error ="Please try Later, Error Occured while Processing...";
            return $error; 
        }
        else 
        {
            $error = "Thanks You !! Your email is sent.";  
            return $error;
        }
        }
        catch(Exception $e) {
            echo $e->getMessage();
        }
    }
    
    $to   = $toEmail;
    $from = $email;
    $name = $userName;
    $subj = $subject;
    $msg = $content;
    
    $error=smtpmailer($to,$from, $name ,$subj, $msg);
    return "Mail sent sucessfull";
}
?>
<!-- <html>
    <head>
        <title>Your email is sent</title>
    </head>
    <body>
    <div class="col-12" style="font-size: 38px;text-align: center;font-family: cursive;margin-top: 20%;color: cadetblue;"><h2 style=""><?php echo $error; ?></h2></div>
    <div class="col-12 text-center" style="text-align: center; font-family: fantasy;"><a style="font-size: 40px; color: cornflowerblue;" href="http://a3web.in/#/Contact">Back To ContactUS Screen</a></div>
    </body>
    
</html> -->