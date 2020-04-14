<?php 
echo "Hai";
require "PHPMailer/PHPMailerAutoload.php";
if(!empty($_POST["send"])) {
	$userName = $_POST["userName"];
	$email = $_POST["userEmail"];
	$subject = $_POST["subject"];
    $content = $_POST["content"];
    $selectedMail = $_POST["duration"];
    $contactNo= $_POST["phoneNo"];

    //$toEmail = "pallamredddyanvesh@gmail.com";
	$toEmail = $selectedMail;
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
    $msg = $content . "\n" ."from" ."\n". $userName.  "\n" ."contact No:" . $contactNo. "\n";
    
   
    
    $error=smtpmailer($to,$from, $name ,$subj, $msg);
    
}
?>
<html>
    <head>
        <title>Your email is sent</title>
    </head>
    <body>
    <div class="col-12"><center><h2 style=""><?php echo $error; ?></h2></center></div>
    <!-- <div class="col-12 text-center" style="font-size:20px"><a href="https://mmchealthcareltd.com/#/Contact">Back To ContactUS Screen</a></div> -->
    </body>

    <?php
        echo "<script> location.href='http://a3web.in/static-html/static-page.html'; </script>";
        exit;
?>
</html>