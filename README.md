# Microservices Project

This project consists of multiple microservices including an API Gateway, Authentication Service, and Order Service, all orchestrated using Docker Compose and Kubernetes.

## Project Structure

```
.
├── gateway/           # API Gateway service
├── services/          # Microservices
│   ├── auth-service/  # Authentication service
│   └── order-service/ # Order management service
├── nginx/            # Nginx configuration
├── k8/               # Kubernetes configurations
├── docker-compose.yml
└── load-test.yml     # Artillery load testing configuration
```

## Prerequisites

- Docker and Docker Compose
- Kubernetes (minikube or any other K8s cluster)
- Node.js and npm
- Artillery (for load testing)

## Starting the Project

### Using Docker Compose

1. Start all services:
```bash
docker-compose up --build
```

This will start:
- API Gateway (3 replicas)
- Auth Service (3 replicas)
- Order Service (3 replicas)
- Nginx as reverse proxy

The services will be available at:
- Main entry point: http://localhost:80
- Gateway: http://localhost:8000
- Auth Service: http://localhost:4001
- Order Service: http://localhost:4002

### Using Kubernetes

1. Start your Kubernetes cluster (if using minikube):
```bash
minikube start
```

2. Apply the Kubernetes configurations:
```bash
kubectl apply -f k8/nginx-config.yaml
kubectl apply -f k8/nginx.yaml
kubectl apply -f k8/auth-deployment.yaml
kubectl apply -f k8/order-deployment.yaml
kubectl apply -f k8/gateway-deployment.yaml
kubectl apply -f k8/redis-deployment.yaml
```

3. Get the service URLs:
```bash
kubectl get services
```

## Load Testing

The project includes Artillery configuration for load testing. To run the load tests:

1. Install Artillery:
```bash
npm install -g artillery
```

2. Run the load test:
```bash
artillery run load-test.yml
```

The load test configuration:
- Duration: 60 seconds
- Arrival Rate: 50 requests per second
- Target: http://localhost
- Tested Endpoint: /auth/login

## Monitoring

You can monitor the services using:
```bash
# For Docker Compose
docker-compose ps

# For Kubernetes
kubectl get pods
kubectl get services
```

## Scaling

The services are configured to run with 3 replicas each. You can modify the number of replicas in:
- `docker-compose.yml` for Docker Compose
- Individual deployment YAML files in the `k8/` directory for Kubernetes

## Troubleshooting

1. If services fail to start:
   - Check logs: `docker-compose logs <service-name>`
   - For Kubernetes: `kubectl logs <pod-name>`

2. If load tests fail:
   - Ensure all services are running
   - Check network connectivity
   - Verify service endpoints are accessible

## Cleanup

### Docker Compose
```bash
docker-compose down
```

### Kubernetes
```bash
kubectl delete -f k8/
```
