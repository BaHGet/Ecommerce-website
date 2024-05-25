<?php

namespace App\GraphQL\Types;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

class ProductType extends ObjectType {
    public function __construct(array $config = []) {
        $attributeType = $config['attributeType'] ?? new AttributeType();
        
        $fields = [
            'id' => Type::string(),
            'name' => Type::string(),
            'inStock' => Type::boolean(),
            'gallery' => Type::listOf(Type::string()),
            'description' => Type::string(),
            'category' => Type::string(),
            'attributes' => Type::listOf($attributeType),
            'brand' => Type::string(),
        ];

        parent::__construct([
            'name' => 'Product',
            'fields' => $fields
        ]);
    }
}
