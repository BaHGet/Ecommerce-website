<?php

namespace App\Controllers;

use GraphQL\GraphQL as GraphQLBase;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Schema;
use GraphQL\Type\SchemaConfig;
use GraphQL\Error\DebugFlag;
use PDO;
use Schema\QueryType;
use App\Services\GraphqlCategoryService;
use App\Services\GraphqlProductService;

class GraphQL extends ObjectType {
    private $productService;
    private $categoryService;
    private $pdo ;
    public function __construct(PDO $pdo){
        $this->pdo = $pdo;
    }
    public function handle() {
        try {
            $schemaConfig = SchemaConfig::create()
                ->setQuery(new QueryType($this->pdo));

            $schema = new Schema($schemaConfig);
        
            $rawInput = file_get_contents('php://input');
            $input = json_decode($rawInput, true);
            
            $query = $input['query'];
            $variableValues = $input['variables'] ?? null;
        
            $rootValue = ['prefix' => 'You said: '];
            $result = GraphQLBase::executeQuery($schema, $query, $rootValue, null, $variableValues);
            $output = $result->toArray(DebugFlag::INCLUDE_DEBUG_MESSAGE | DebugFlag::INCLUDE_TRACE);
            echo json_encode($output);
        } catch (\Exception $e) {
            header('Content-Type: application/json', true, 500);
            echo json_encode(['error' => $e->getMessage()]);
        }
    }
}