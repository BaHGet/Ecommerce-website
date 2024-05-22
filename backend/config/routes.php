<?php
use App\Controllers\ProductController;

return [
    '/' => [ProductController::class, 'index'],
    '/Products/getAll' => [ProductController::class, 'getAll'],
    '/Products/getProduct' => [ProductController::class, 'getProduct'],
];