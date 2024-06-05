<?php
use App\Controllers\ProductController;
use App\Controllers\GraphQL;

return [
    '/' => [ProductController::class, 'index'],
    '/Products/getAll' => [ProductController::class, 'getAll'],
    '/Products/getProduct' => [ProductController::class, 'getProduct'],
    '/Products/getCategories' => [ProductController::class, 'getCategories'],
    '/graphql' => [GraphQL::class, 'handle'],
];