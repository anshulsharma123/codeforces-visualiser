<?php
 $name= $_POST['name'];
 $visitor_email=$_POST['email'];
 $message=$_POST['message'];

 $email_from='krishanmishra2585@gmail.com';

 $email_subject="L.K. Submission";

 $email_body="User Name: $name.\n".
               "User Email: $visitor_email.\n".
                "User Message: $message.\n";

 $to="krishanmishra7808@gmail.com";

 $headers="From: $email_from\r\n";

 $headers .="Reply-To: $visitor_email\r\n";

 mail($to,$email_subject,$email_body,$headers);

 header("Location: contact_us.html");
 ?>