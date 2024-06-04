<?php

namespace App\Services;

use App\Models\Order;
use PDO;

class GraphqlOrderService{
    private $pdo;

    public function __construct(PDO $pdo){
        $this->pdo = $pdo;
    }

    public function createOrder($productId, $quantity, $customer_id, $attributes) {
        

        $stmt = $this->pdo->prepare("
            INSERT INTO orders (product_id, quantity, customer_id, attributes)
            VALUES (:product_id, :quantity, :customer_id, :attributes)
        ");
        $stmt->execute([
            'product_id' => $productId,
            'quantity' => $quantity,
            'customer_id' => $customer_id,
            'attributes' => json_encode($attributes),
        ]);
        
        $Order = new Order(
            $productId,
            $quantity,
            $customer_id,
            json_encode($attributes),
            'Order created successfully.'
        );

        return $Order;
        
    }
}