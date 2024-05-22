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

    public function __construct($id, $name, $inStock, $gallery, $description, $category, $attributes, $brand) {
        $this->id = $id;
        $this->name = $name;
        $this->inStock = $inStock;
        $this->gallery = $gallery;
        $this->description = $description;
        $this->category = $category;
        $this->attributes = $attributes;
        $this->brand = $brand;
        echo 'model approach';
        echo '<br>';
    }

    public function toArray() {
        echo 'model approach';
    echo '<br>';
        return [
            'id' => $this->id,
            'name' => $this->name,
            'inStock' => $this->inStock,
            'gallery' => $this->gallery,
            'description' => $this->description,
        ];
    }
}