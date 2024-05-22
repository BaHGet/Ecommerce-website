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
            p.id, p.name, p.in_stock, p.description, p.category, p.brand,
            GROUP_CONCAT(DISTINCT pg.image_url) AS gallery,
            GROUP_CONCAT(DISTINCT CONCAT_WS('|', pa.attribute_name, pa.attribute_value)) AS attributes
        FROM products p
        LEFT JOIN product_gallery pg ON p.id = pg.product_id
        LEFT JOIN product_attributes pa ON p.id = pa.product_id
        GROUP BY p.id
    ");

    $products = [];
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $gallery = $row['gallery'] ? explode(',', $row['gallery']) : [];
        $attributes = [];
        if ($row['attributes']) {
            foreach (explode(',', $row['attributes']) as $attr) {
                list($name, $value) = explode('|', $attr);
                $attributes[] = [
                    'name' => $name,
                    'value' => $value
                ];
            }
        }

        $products[] = new Product(
            $row['id'],
            $row['name'],
            (bool)$row['in_stock'],
            $gallery,
            $row['description'],
            $row['category'],
            $attributes,
            $row['brand']
        );
    }
    return $products;
}
public function getProductById($productId) {
    $sql = "
        SELECT 
            p.id, p.name, p.in_stock, p.description, p.category, p.brand,
            GROUP_CONCAT(DISTINCT pg.image_url) AS gallery,
            GROUP_CONCAT(DISTINCT CONCAT_WS('|', pa.attribute_name, pa.attribute_value)) AS attributes
        FROM products p
        LEFT JOIN product_gallery pg ON p.id = pg.product_id
        LEFT JOIN product_attributes pa ON p.id = pa.product_id
        WHERE p.id = :productId  
        GROUP BY p.id;
    ";

    $stmt = $this->pdo->prepare($sql);
    $stmt->execute(['productId' => $productId]);
    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($result) {
        $gallery = $result['gallery'] ? explode(',', $result['gallery']) : [];
        $attributes = [];
        if ($result['attributes']) {
            foreach (explode(',', $result['attributes']) as $attr) {
                list($name, $value) = explode('|', $attr);
                $attributes[] = [
                    'name' => $name,
                    'value' => $value
                ];
            }
        }
        
        $product = new Product(
            $result['id'],
            $result['name'],
            (bool)$result['in_stock'],
            $gallery,
            $result['description'],
            $result['category'],
            $attributes,
            $result['brand']
        );
        return $product;
    } else {
        return null;
    }
}

}