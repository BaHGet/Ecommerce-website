<?php

namespace App\Services;

use App\Models\Category;
use PDO;

class GraphqlCategoryService {
    private $pdo;

    public function __construct(PDO $pdo) {
        $this->pdo = $pdo;
    }

    public function getAllCategories() {
        $stmt = $this->pdo->query("SELECT * FROM categories");
        $categories = [];
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $category = new Category(
                $row['id'],
                $row['name']
            );

            $categories[] = $category;
        }
        return $categories;
    }
}