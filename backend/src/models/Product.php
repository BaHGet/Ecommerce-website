<?php

namespace App\Models;


class Product {
    public $id;
    public $name;
    public $in_stock;
    public $gallery;
    public $description;
    public $category;
    public $attributes;
    public $brand;
    public $price;

    public function __construct($id, $name, $in_stock, $description, $brand, $category, $gallery, $attributes, $price) {
        $this->id = $id;
        $this->name = $name;
        $this->in_stock = $in_stock;
        $this->description = $description;
        $this->brand = $brand;
        $this->category = $category;
        $this->gallery = $gallery;
        $this->attributes = $attributes;
        $this->price = $price;
    }

    public function toArray() {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'brand' => $this->brand,
            'inStock' => $this->in_stock,
            'price' => $this->price,
            'category' => $this->category,
            'description' => $this->description,
            'attributes' => $this->attributes,
            'gallery' => $this->gallery,
        ];
    }
}