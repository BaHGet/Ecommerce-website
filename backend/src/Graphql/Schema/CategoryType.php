<?php

namespace Schema;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

class CategoryType extends ObjectType {
    public function __construct() {
        $config = [
            'name' => 'Category',
            'fields' => [
                'id' => Type::nonNull(Type::int()),
                'name' => Type::nonNull(Type::string()),
            ],
        ];
        parent::__construct($config);
    }
}
