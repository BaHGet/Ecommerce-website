<?php

// index.php
require './../bootstrap.php';

$requestUri = $_SERVER['REQUEST_URI'];
$method = $_SERVER['REQUEST_METHOD'];

$router->dispatch($requestUri, $method);