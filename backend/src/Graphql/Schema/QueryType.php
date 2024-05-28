<?php

namespace Schema;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;
use App\Services\GraphqlProductService;
use App\Services\GraphqlCategoryService;
use Schema\SchemaTypes;


class QueryType extends ObjectType {
    public function __construct($pdo) {
        $productService = new GraphqlProductService($pdo);
        $categoryService = new GraphqlCategoryService($pdo);
        $config = [
            'name' => 'Query',
            'fields' => [
                'product' => [
                    'type' => SchemaTypes::product(),
                    'args' => [
                        'id' => Type::nonNull(Type::string()),
                    ],
                    'resolve' => function($root, $args) use ($productService) {
                        return $productService->getProductById($args['id']);
                    },
                ],
                'products' => [
                    'type' => Type::listOf(SchemaTypes::product()),
                    'resolve' => function() use ($productService) {
                        return $productService->getAllProducts();
                    },
                ],
                'categories' => [
                    'type' => Type::listOf(SchemaTypes::category()),
                    'resolve' => function() use ($categoryService) {
                        return $categoryService->getAllCategories();
                    },
                ],
            ],
        ];
        parent::__construct($config);
    }
}
