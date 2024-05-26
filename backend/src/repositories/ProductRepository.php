<?php

namespace App\Repositories;

use App\Models\Product;
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
            GROUP_CONCAT(CONCAT_WS('|', pa.attribute, pa.values) SEPARATOR '||') AS attributes,
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
        $attributesArray = explode('||', $row['attributes']);
        $attributes = [];

        foreach ($attributesArray as $attr) {
            if($attr){
                list($attribute, $value) = explode('|', $attr);
                if (!isset($attributes[$attribute])) {
                    $attributes[$attribute] = [
                        'name' => $attribute,
                        'items' => []
                    ];
                }
                $attributes[$attribute]['items'][] = ['value' => $value];
            }
        }

        // Convert attributes associative array to indexed array
        $attributes = array_values($attributes);
        
        $products[] = new Product(
            $row['id'],
            $row['name'],
            $row['brand'],
            (bool)$row['in_stock'],
            $row['price'],
            $row['category'],
            strval($row['description']),
            $attributes,
            explode('|', $row['gallery'])
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
            GROUP_CONCAT(CONCAT_WS('|', pa.attribute, pa.values) SEPARATOR '||') AS attributes,
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
    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($result) {
        $attributesArray = explode('||', $result['attributes']);
        $attributes = [];

        foreach ($attributesArray as $attr) {
            if($attr){
                list($attribute, $value) = explode('|', $attr);
                if (!isset($attributes[$attribute])) {
                    $attributes[$attribute] = [
                        'name' => $attribute,
                        'items' => []
                    ];
                }
                $attributes[$attribute]['items'][] = ['value' => $value];
            }
        }

        // Convert attributes associative array to indexed array
        $attributes = array_values($attributes);
        
        $product = new Product(
            $result['id'],
            $result['name'],
            $result['brand'],
            (bool)$result['in_stock'],
            $result['price'],
            $result['category'],
            strval($result['description']),
            $attributes,
            explode('|', $result['gallery'])
        );
        return $product;
    } else {
        return null;
    }
}

public function getCategories() {
    $stmt=$this->pdo->query("
        SELECT * FROM categories WHERE 1
    ");
    $categories_array = [];
    while($result = $stmt->fetch(PDO::FETCH_ASSOC)){
        array_push($categories_array, $result);
    }
    if ($categories_array){
        return $categories_array;
    }
}

}


/* 

function separateOddEvenIndices($arr) {
        $evenIndexElements = [];
        $oddIndexElements = [];
    
        foreach ($arr as $index => $value) {
            if ($index % 2 == 0) {
                $evenIndexElements[] = $value;
            } else {
                $oddIndexElements[] = $value;
            }
        }
    
        return [$evenIndexElements, $oddIndexElements];
    }


*/