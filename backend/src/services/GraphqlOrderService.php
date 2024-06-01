<?php

namespace App\Services;

use App\Models\Order;
use PDO;

class GraphqlOrderService{
    private $pdo;

    public function __construct(PDO $pdo){
        $this->pdo = $pdo;
    }

    public function createOrder($id, $productId, $quantity, $customer_id, $attributes) {
        echo $id;
        $attributesJson = json_encode($attributes);
        
        $stmt = $this->pdo->prepare("
            INSERT INTO orders (id, product_id, quantity, customer_id, attributes)
            VALUES (:id, :product_id, :quantity, :customer_id, :attributes)
        ");
        $stmt->execute([
            'id' => $id,
            'product_id' => $productId,
            'quantity' => $quantity,
            'customer_id' => $customer_id,
            'attributes' => $attributes,
        ]);
        
        $Order = new Order(
            $id,
            $productId,
            $quantity,
            $customer_id,
            $attributes,
            'Order created successfully.'
        );

        return $Order;
        
    }
}