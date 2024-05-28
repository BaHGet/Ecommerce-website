<?php

namespace App\Repositories;

use App\Models\Product;
use App\Models\Category;
use PDO;

class ProductRepository {
private $pdo;

public function __construct(PDO $pdo) {
    $this->pdo = $pdo;
}

public function getAll() {
    $stmt = $this->pdo->query("
        SELECT 
            p.id, p.name, p.in_stock, p.description, p.brand,
            GROUP_CONCAT(DISTINCT ca.name) AS category,
            GROUP_CONCAT(DISTINCT pg.images) AS gallery,
            GROUP_CONCAT(CONCAT_WS('|', pa.attribute, pa.values,pa.displayValue,pa.type) SEPARATOR '||') AS attributes,
            GROUP_CONCAT(DISTINCT CONCAT_WS('', pr.amount, pr.currency)) AS price
        FROM products p
        LEFT JOIN product_gallery pg ON p.id = pg.product_id
        LEFT JOIN product_attributes pa ON p.id = pa.product_id
        LEFT JOIN categories ca ON p.category = ca.id
        LEFT JOIN prices pr ON p.id = pr.product_id
        GROUP BY p.id
    ");

    
    $products = [];
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $gallery = explode('|', $row['gallery']);
        $attributes = $this->parseAttributes($row['attributes']);
        $products[] = new Product(
            $row['id'],
            $row['name'],
            (bool)$row['in_stock'],
            strval($row['description']),
            $row['brand'],
            $row['category'],
            $gallery,
            $attributes,
            $row['price'],
        );
    }
    return $products;
}
public function getProductById($productId) {
    $stmt =$this->pdo->prepare("
        SELECT
            p.id, p.name, p.in_stock, p.description, p.brand,
            GROUP_CONCAT(DISTINCT ca.name) AS category,
            GROUP_CONCAT(DISTINCT pg.images) AS gallery,
            GROUP_CONCAT(CONCAT_WS('|', pa.attribute, pa.values,pa.displayValue,pa.type) SEPARATOR '||') AS attributes,
            GROUP_CONCAT(DISTINCT CONCAT_WS('', pr.amount, pr.currency)) AS price
        FROM products p
        LEFT JOIN product_gallery pg ON p.id = pg.product_id
        LEFT JOIN product_attributes pa ON p.id = pa.product_id
        LEFT JOIN categories ca ON p.category = ca.id
        LEFT JOIN prices pr ON p.id = pr.product_id
        WHERE p.id = :productId  
        GROUP BY p.id
    ");
    $stmt->bindParam('productId' , $productId);
    $stmt->execute();
    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($row) {
        $gallery = explode('|', $row['gallery']);
        $attributes = $this->parseAttributes($row['attributes']);
        $price = $row['price'];
        $product = new Product(
            $row['id'],
            $row['name'],
            $row['in_stock'],
            $row['description'],
            $row['brand'],
            $row['category'],
            $gallery,
            $attributes,
            $price
        );
        return $product;
    } else {
        return null;
    }
}

public function getCategories() {
    $stmt=$this->pdo->query("
        SELECT * FROM categories 
    ");
    $categories = [];
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            
            $category = new Category(
                $row['id'],
                $row['name']
            );

            $categories[] = $category;
        }
        return $categories;
}
private function parseAttributes($attributesStr) {
    $result = [];
    $attributes = explode('||', $attributesStr);

    foreach ($attributes as $attribute) {
        if (empty($attribute)) {
            continue;
        }
        list($name, $valuesStr, $displayValuesStr, $type) = explode('|', $attribute);
        $values = explode(',', $valuesStr);
        $displayValues = explode(',', $displayValuesStr);
        $items = [];

        foreach ($values as $index => $value) {
            $items[] = [
                'displayValue' => $displayValues[$index],
                'value' => $value,
            ];
        }

        $result[] = [
            'id' => $name,
            'items' => $items,
            'name' => $name,
            'type' => $type,
        ];
    }
    
    return $result;
}

}