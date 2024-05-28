<?php
namespace App;

class Router {
    private $routes = [];
    private $controllerInstances = [];

    public function registerRoutes($routes) {
        $this->routes = $routes;
    }

    public function addControllerInstance($class, $instance) {
        $this->controllerInstances[$class] = $instance;
    }

    public function dispatch($requestUri, $method) {
        // Parse the request URI to remove query parameters
        $parsedUrl = parse_url($requestUri);
        $path = $parsedUrl['path'];
        $queryParams = [];
        
        if (isset($parsedUrl['query'])) {
            parse_str($parsedUrl['query'], $queryParams);
        }
        
        foreach ($this->routes as $route => $action) {
            if ($path === $route && $_SERVER['REQUEST_METHOD'] === $method) {
                $controllerClass = $action[0];
                $controllerMethod = $action[1];
                if (isset($this->controllerInstances[$controllerClass])) {
                    $controller = $this->controllerInstances[$controllerClass];
                    
                    // Pass query parameters to controller method
                    if ($controllerMethod === 'getProduct') {
                        call_user_func([$controller, $controllerMethod], $queryParams);
                    } else {
                        call_user_func([$controller, $controllerMethod]);
                    }
                }else{
                    // Controller instance not found
                    http_response_code(404);
                    echo json_encode(['message' => 'Controller instance not found for class: ' . $controllerClass]);
                }
                return;
            }
        }

        // If no route matched, return a 404 response
        header('Content-Type: application/json');
        http_response_code(404);
        echo json_encode(['message' => 'Endpoint not found']);
    }
}
