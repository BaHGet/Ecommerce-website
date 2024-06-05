<?php

namespace Schema;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

class ItemType extends ObjectType {
    public function __construct() {
        $config = [
            'name' => 'Item',
            'fields' => [
                'displayValue' => Type::string(),
                'value' => Type::string(),
            ],
        ];
        parent::__construct($config);
    }
}