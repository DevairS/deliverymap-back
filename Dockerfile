FROM node:latest

WORKDIR /app

COPY package*.json ./

COPY . .

EXPOSE 8080
EXPOSE 9229

RUN npm install

CMD npm run start:debug