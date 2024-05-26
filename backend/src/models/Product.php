<?php

namespace App\Models;


class Product {
    private $id;
    private $name;
    private $inStock;
    private $gallery;
    private $description;
    private $category;
    private $attributes;
    private $brand;
    private $price;

    public function __construct($id, $name,  $brand, $inStock, $price, $category, $description, $attributes, $gallery) {
        $this->id = $id;
        $this->name = $name;
        $this->brand = $brand;
        $this->inStock = $inStock;
        $this->price = $price;
        $this->category = $category;
        $this->description = $description;
        $this->attributes = $attributes;
        $this->gallery = $gallery;
    }

    public function toArray() {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'brand' => $this->brand,
            'inStock' => $this->inStock,
            'price' => $this->price,
            'category' => $this->category,
            'description' => $this->description,
            'attributes' => $this->attributes,
            'gallery' => $this->gallery,
        ];
    }
}