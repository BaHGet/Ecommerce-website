<?php

namespace App;

use PDO;
use PDOException;

class Database {
    private $pdo;

    public function __construct($config) {
        $dsn = 'mysql:host=' . $config['host'] . ';dbname=' . $config['dbname'];
        try {
            $this->pdo = new PDO($dsn, $config['user'], $config['password']);
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            die('Database connection failed: ' . $e->getMessage());
        }
    }

    public function getPdo() {
        return $this->pdo;
    }
}