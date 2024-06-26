<?php

namespace Schema;
use GraphQL\Type\Definition\InputObjectType;
use GraphQL\Type\Definition\Type;

class SchemaTypes {
    private static $productType;
    private static $categoryType;
    private static $attributeType;
    private static $itemType;
    private static $orderType;
    

    public static function product() {
        return self::$productType ?: (self::$productType = new ProductType());
    }

    public static function category() {
        return self::$categoryType ?: (self::$categoryType = new CategoryType());
    }

    public static function attribute() {
        return self::$attributeType ?: (self::$attributeType = new AttributeType());
    }

    public static function item() {
        return self::$itemType ?: (self::$itemType = new ItemType());
    }
    public static function order() {
        return self::$orderType ?: (self::$orderType = new OrderType());
    }
    public static function orderAttribute() {
        return new InputObjectType([
            'name' => 'AttributeInput',
            'fields' => [
                'name' => Type::nonNull(Type::string()),
                'value' => Type::nonNull(Type::string()),
            ],
        ]);
    } 
}
