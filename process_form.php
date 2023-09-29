<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $first_name = isset($_POST["first_name"]) ? $_POST["first_name"] : "";
    $last_name = isset($_POST["last_name"]) ? $_POST["last_name"] : "";

    // You can perform any actions with the data here
    // For example, you can save it to a file or a database, or process it in any way

    // For this example, we won't display it back to the user
} else {
    echo "Error: Data not submitted via POST method.";
}
?>