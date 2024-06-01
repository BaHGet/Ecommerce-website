<?php

namespace Schema;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;
use App\Services\GraphqlOrderService;
use Schema\SchemaTypes;

class MutationType extends ObjectType {
    

    public function __construct($pdo){
        $orderService = new GraphqlOrderService($pdo);
        $config = [
            'name' => 'Mutation',
            'fields' => [
                'createOrder' => [
                    'type' =>SchemaTypes::order(),
                    'args' => [
                        'id' => Type::nonNull(Type::string()),
                        'product_id' => Type::nonNull(Type::string()),
                        'quantity' => Type::nonNull(Type::int()),
                        'customer_id' => Type::nonNull(Type::string()),
                        'attributes' => Type::nonNull(Type::listOf(SchemaTypes::orderAttribute())),
                    ],
                    'resolve' => function($root, $args) use ($orderService) {
                        return $orderService->createOrder(
                            $args['id'], 
                            $args['product_id'],
                            $args['quantity'], 
                            $args['customer_id'], 
                            $args['attributes']
                        );
                    },
                ],
            ],
        ];
        parent::__construct($config);
    }
}