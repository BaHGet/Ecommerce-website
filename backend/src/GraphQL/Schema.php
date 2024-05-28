<?php

namespace App\GraphQL;

use GraphQL\Type\Schema as GraphQLSchema;
use GraphQL\Type\SchemaConfig;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;
use App\Services\ProductService;
use App\GraphQL\Types\ProductType;
use App\GraphQL\Types\AttributeType;

class Schema {
    public static function build(ProductService $productService) {
        // Define the AttributeType
        $attributeType = new AttributeType();
        
        // Define the ProductType and pass the AttributeType
        $productType = new ProductType([
            'attributeType' => $attributeType
        ]);

        // Define the Query type
        $queryType = new ObjectType([
            'name' => 'Query',
            'fields' => [
                'product' => [
                    'type' => $productType,
                    'args' => [
                        'id' => Type::nonNull(Type::string())
                    ],
                    'resolve' => function ($root, $args) use ($productService) {
                        return $productService->getProductById($args['id']);
                    }
                ],
                'products' => [
                    'type' => Type::listOf($productType),
                    'resolve' => function () use ($productService) {
                        return $productService->getAllProducts();
                    }
                ]
            ]
        ]);

        // Create and return the schema
        return new GraphQLSchema(
            SchemaConfig::create()
                ->setQuery($queryType)
        );
    }
}
