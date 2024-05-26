<?php

namespace App\Services;

use App\Repositories\ProductRepository;

class ProductService
{
    private $productRepository;

    public function __construct(ProductRepository $productRepository)
    {
        $this->productRepository = $productRepository;
    }

    public function getAllProducts()
    {
        return $this->productRepository->getAll();
    }

    public function getProductById($productId)
    {
        return $this->productRepository->getProductById($productId);
    }

    public function getCategories()
    {
        return $this->productRepository->getCategories();
    }

}