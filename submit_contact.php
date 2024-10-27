<?php
// submit_contact.php

// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database connection
$servername = "localhost"; // Change if necessary
$username = "root"; // Your MySQL username
$password = ""; // Your MySQL password
$dbname = "brew_haven"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Collecting form data
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate input
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $suggestions = trim($_POST['suggestions']);
    $rating = intval($_POST['rating']); // Ensure rating is an integer
    $overallExperience = $_POST['overallExperience'];

    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO contact_us (name, email, suggestions, rating, overall_experience) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssis", $name, $email, $suggestions, $rating, $overallExperience);

    // Execute the statement and check for errors
    if ($stmt->execute()) {
        echo "Thank you for your feedback!";
    } else {
        echo "Error: " . $stmt->error; // Show SQL error
    }

    // Close the statement
    $stmt->close();
}

// Close the connection
$conn->close();
?>
