<?php

namespace Schema;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

class AttributeType extends ObjectType {
    public function __construct() {
        $config = [
            'name' => 'Attribute',
            'fields' => [
                'id' => Type::string(),
                'items' => Type::listOf(new ItemType()),
                'name' => Type::string(),
                'type' => Type::string(),
            ],
        ];
        parent::__construct($config);
    }
}
