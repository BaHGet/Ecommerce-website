<?php
header('Content-Type: application/json');

require __DIR__ . '/vendor/autoload.php';

$config = require __DIR__ . '/config/app.php';

// Initialize database connection
use App\Database;
$dbConfig = $config['db'];
$db = new Database($dbConfig);
$pdo = $db->getPdo();

// Register routes
use App\Router;
$routes = require __DIR__ . '/config/routes.php';
$router = new Router();
$router->registerRoutes($routes);

// Setup dependency injection
use App\Repositories\ProductRepository;
use App\Services\ProductService;
use App\Controllers\ProductController;

$productRepository = new ProductRepository($pdo);
$productService = new ProductService($productRepository);
$productController = new ProductController($productService);

// Register controller instances in the router
$router->addControllerInstance(ProductController::class, $productController);

// Dispatch the request
$router->dispatch($_SERVER['REQUEST_URI'], $_SERVER['REQUEST_METHOD']);