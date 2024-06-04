<?php 

namespace App\Models;


class Order {
    public $product_id;
    public $quantity;
    public $customer_id;
    public $attributes;
    public $massage;

    public function __construct($product_id, $quantity, $customer_id, $attributes, $massage) {
        $this->product_id = $product_id;
        $this->quantity = $quantity;
        $this->customer_id = $customer_id;
        $this->attributes = $attributes;
        $this->massage = $massage;
    }
}