<?php 

namespace Schema;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

class OrderType extends ObjectType
{
    public function __construct() {
        $config = [
            'fields' => [
                'id' => Type::nonNull(Type::string()),
                'product_id' => Type::nonNull(Type::string()),
                'quantity' => Type::nonNull(Type::int()),
                'customer_id' => Type::nonNull(Type::string()),
                'attributes' => Type::nonNull(Type::string()),
                'massage' => Type::string(),
            ],
        ];
        parent::__construct($config);
    }
}