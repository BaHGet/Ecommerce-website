<?php

namespace App\GraphQL\Types;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

class AttributeType extends ObjectType {
    public function __construct() {
        $config = [
            'name' => 'Attribute',
            'fields' => [
                'name' => Type::string(),
                'value' => Type::string(),
            ],
        ];
        parent::__construct($config);
    }
}
