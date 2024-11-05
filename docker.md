build docker image
docker build -t nextjs-app .
docker-compose up --build
<!-- development guna command -->
docker build -t nextjs-app-dev -f Dockerfile.dev .
docker run -p 3000:3000 -v $(pwd):/app nextjs-app-dev
<!-- dev guna compose -->
docker-compose -f docker-compose.dev.yml up --build
