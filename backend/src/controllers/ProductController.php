<?php

namespace App\Controllers;

use App\Services\ProductService;
class ProductController {
    private $productService;

    public function __construct(ProductService $productService) {
        $this->productService = $productService;
    }

    // Action to handle the home page
    public function index() {
        http_response_code(404);
        echo json_encode(['message' => 'Not Found!','responseCode'=> '404']);
    }

    // Action to list all products
    public function getAll() {
        $products = $this->productService->getAllProducts();
        $productArray = array_map(function($product) {
            return $product->toArray();
        }, $products);
        echo json_encode($productArray);
    }

    // Action to show a specific product
    public function getProduct() {
        if (isset($_GET['product_id'])) {
            header('Content-Type: application/json');
            $productId = $_GET['product_id'];
            $product = $this->productService->getProductById($productId);
            if ($product) {
                echo json_encode($product->toArray());
            } else {
                http_response_code(404);
                echo json_encode(['message' => 'Product not found']);
            }
        } else {
            http_response_code(400);
            echo json_encode(['message' => 'Product ID not provided']);
        }
    }
    
    public function getCategories(){
        header('Content-Type: application/json');
        $categories = $this->productService->getCategories();
        if($categories){
            echo json_encode($categories);
        }else{
            http_response_code(500);
            echo json_encode(['message' => 'Server issue']);
        }
    }
}