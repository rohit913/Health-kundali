<?php
if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST["name"] ?? '';
    $surname = $_POST["surname"] ?? '';
    $email = $_POST["email"] ?? '';
    $phone = $_POST["phone"] ?? ''; 
    $location = $_POST["location"] ?? ''; 
    $age = $_POST["age"] ?? ''; 
    $to = 'rsharma07feb@gmail.com'; // Primary recipient

    // Additional emails for BCC
    $bcc1 = 'campaignmanager.mm.kamini@gmail.com'; // Replace with the actual email address
    $bcc2 = 'bccemail2@example.com'; // Replace with the actual email address

    // Setting up the headers
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "Bcc: $bcc1, $bcc2\r\n"; // Adding BCC emails

    $subject = "New Submission from " . $name . " " . $surname;

    // Constructing the message body
    $message = "<html><body>";
    $message .= "<p>Name: " . htmlspecialchars($name) . " " . htmlspecialchars($surname) . "</p>";
    $message .= "<p>Email: " . htmlspecialchars($email) . "</p>";
    $message .= "<p>Phone: " . htmlspecialchars($phone) . "</p>";
    $message .= "<p>Location: " . htmlspecialchars($location) . "</p>";
    $message .= "<p>Age: " . htmlspecialchars($age) . "</p>";
    $message .= "</body></html>";

    // Send the email
    if(mail($to, $subject, $message, $headers)) {
        echo "Your submission has been successfully sent. We will contact you very soon!";
    } else {
        echo "Something went wrong. Please try again.";
    }
} else {
    echo "No form data received";
}
?>


