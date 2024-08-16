<?php
// Database credentials
define('DB_HOST', 'localhost');
define('DB_NAME', 'your_database_name');
define('DB_USER', 'your_database_username');
define('DB_PASSWORD', 'your_database_password');

// PDO options for error handling and connection persistence
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
    PDO::ATTR_PERSISTENT         => true
];

/**
 * Establish a PDO connection and return the PDO instance.
 * 
 * @return PDO
 */
function getDB() {
    static $db = null;
    if ($db === null) {
        $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4";
        try {
            $db = new PDO($dsn, DB_USER, DB_PASSWORD, $GLOBALS['options']);
        } catch (PDOException $e) {
            // Handle error appropriately
            die("Database connection failed: " . $e->getMessage());
        }
    }
    return $db;
}
?>
