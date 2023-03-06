# gateway-management-api

## Tech Stack & Externerl Packages
  
  ○ Noded JS / express Js(framework)
  
  ○ axios -Http Library
  
  ○ Docker 

  ○ GKE K8 (kubernetes)
  
  ○ Swager - documentation

## Project Structer
Here the project structure 
```bash
  
├─gateway-service
│   ├── package.json
│   ├── src
│   │   ├── controllers
│   │   │   ├── gatewayController.js
│   │   │   └── peripheralController.js
│   │   ├── models
│   │   │   ├── gatewayModel.js
│   │   │   └── peripheralModel.js
│   │   ├── routes
│   │   │   ├── gatewayRoutes.js
│   │   │   └── peripheralRoutes.js
│   │   ├── app.js
│   │   ├── kafka-producer.js
│   │   └── swagger
│   │       └── gateway.swagger.yaml
│   ├── Dockerfile
│   ├── kubernetes
│   │   ├── deployment.yaml
│   │   └── service.yaml
│   └── README.md
├── peripheral-service
│   ├── package.json
│   ├── src
│   │   ├── controllers
│   │   │   └── peripheralController.js
│   │   ├── models
│   │   │   └── peripheralModel.js
│   │   ├── routes
│   │   │   └── peripheralRoutes.js
│   │   ├── app.js
│   │   ├── kafka-consumer.js
│   │   └── swagger
│   │       └── peripheral.swagger.yaml
│   ├── Dockerfile
│   ├── kubernetes
│   │   ├── deployment.yaml
│   │   └── service.yaml
│   └── README.md
├── query-service
│   ├── package.json
│   ├── src
│   │   ├── controllers
│   │   │   └── queryController.js
│   │   ├── models
│   │   │   └── queryModel.js
│   │   ├── routes
│   │   │   └── queryRoutes.js
│   │   ├── app.js
│   │   ├── kafka-consumer.js
│   │   └── swagger
│   │       └── query.swagger.yaml
│   ├── Dockerfile
│   ├── kubernetes
│   │   ├── deployment.yaml
│   │   └── service.yaml
│   └── README.md
├── docker-compose.yml
└── README.md

```

## License
[MIT](https://choosealicense.com/licenses/mit/)
Created By Chinthana De silva
