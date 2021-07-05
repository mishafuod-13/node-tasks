FROM node:14.16-alpine3.13
WORKDIR /usr/app
COPY package*.json .
RUN npm install
RUN npm install -g typeorm
RUN npm install -g ts-node
COPY . .
CMD ["npm", "start"]