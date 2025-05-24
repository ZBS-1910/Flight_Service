FROM node

WORKDIR /developer/nodejs/flight-service

COPY package*.json ./

RUN npm install

COPY . .


ENV PORT=3001

CMD ["npm", "run", "dev"]


#docker build -t flight-service

# docker run -it --init --name flights_service --network microservice `
#   -p 3000:3001 `
#   -v "${PWD}:/developer/nodejs/flight-service" `
#   -v flight-service-node-modules:/developer/nodejs/flight-service/node_modules `
#   flight-service:latest