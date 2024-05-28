<?php

namespace Schema;

class SchemaTypes {
    private static $productType;
    private static $categoryType;
    private static $attributeType;
    private static $itemType;

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
}
