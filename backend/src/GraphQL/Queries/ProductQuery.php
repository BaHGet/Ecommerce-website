<?php

namespace App\GraphQL\Queries;

use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ObjectType;
use App\Services\ProductService;
use App\GraphQL\Types\ProductType;

class ProductQuery extends ObjectType {
    private $productService;

    public function __construct(ProductService $productService) {
        $this->productService = $productService;

        parent::__construct([
            'name' => 'Query',
            'fields' => [
                'product' => [
                    'type' => new ProductType(),
                    'args' => [
                        'id' => Type::nonNull(Type::string())
                    ],
                    'resolve' => function ($root, $args) {
                        return $this->productService->getProductById($args['id']);
                    }
                ],
                'products' => [
                    'type' => Type::listOf(new ProductType()),
                    'resolve' => function () {
                        return $this->productService->getAllProducts();
                    }
                ]
            ]
        ]);
    }
}