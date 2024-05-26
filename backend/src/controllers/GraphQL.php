<?php

namespace App\Controller;

use App\GraphQL\Schema;
use App\Services\ProductService;
use GraphQL\GraphQL as GraphQLBase;
use RuntimeException;
use Throwable;

class GraphQL {
    static public function handle(ProductService $productService) {
        try {
            // Build the GraphQL schema
            $schema = Schema::build($productService);

            // Parse the raw input from the request
            $rawInput = file_get_contents('php://input');
            if ($rawInput === false) {
                throw new RuntimeException('Failed to get php://input');
            }

            // Decode the raw input
            $input = json_decode($rawInput, true);
            $query = $input['query'];
            $variableValues = $input['variables'] ?? null;

            // Execute the GraphQL query
            $rootValue = [];
            $result = GraphQLBase::executeQuery($schema, $query, $rootValue, null, $variableValues);
            $output = $result->toArray();
        } catch (Throwable $e) {
            $output = [
                'error' => [
                    'message' => $e->getMessage(),
                ],
            ];
        }

        // Set the response content type and return the output as JSON
        header('Content-Type: application/json; charset=UTF-8');
        return json_encode($output);
    }
}