<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE');
header('Access-Control-Allow-Headers: Content-Type, x-requested-with');

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
use App\Services\GraphqlCategoryService;
use App\Services\GraphqlProductService;
use App\Controllers\GraphQL;
use Schema\QueryType;

$productRepository = new ProductRepository($pdo);
$productService = new ProductService($productRepository);
$productController = new ProductController($productService);
$GraphQL = new GraphQL($pdo);
$GraphqlProductService = new GraphqlProductService($pdo);
$GraphqlCategoryService = new GraphqlCategoryService($pdo);

// Register controller instances in the router
$router->addControllerInstance(ProductController::class, $productController);
$router->addControllerInstance(GraphQL::class, $GraphQL);

// Dispatch the request
$router->dispatch($_SERVER['REQUEST_URI'], $_SERVER['REQUEST_METHOD']);