<?php
   if ($_SERVER["REQUEST_METHOD"] == "POST") {
       $name = htmlspecialchars($_POST['name']);
       $email = htmlspecialchars($_POST['email']);
       $message = htmlspecialchars($_POST['message']);

       // Set the recipient email address
       $to = "your_email@example.com"; // Replace with your email address
       $subject = "New Message from Contact Form";

       // Create the email content
       $email_content = "Name: $name\n";
       $email_content .= "Email: $email\n";
       $email_content .= "Message:\n$message\n";

       // Send the email
       if (mail($to, $subject, $email_content)) {
           echo "Thank you for your message!";
       } else {
           echo "Oops! Something went wrong, and we couldn't send your message.";
       }
   } else {
       echo "Invalid request.";
   }
   ?>