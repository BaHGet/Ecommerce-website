<?php

namespace Schema;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

class ProductType extends ObjectType {
    public function __construct() {
        $config = [
            'fields' => [
                'id' => Type::nonNull(Type::string()),
                'name' => Type::nonNull(Type::string()),
                'in_stock' => Type::nonNull(Type::boolean()),
                'description' => Type::string(),
                'brand' => Type::string(),
                'category' => Type::string(),
                'gallery' => Type::listOf(Type::string()),
                'attributes' => Type::listOf(SchemaTypes::attribute()),
                'price' => Type::string(),
            ],
        ];
        parent::__construct($config);
    }
}
