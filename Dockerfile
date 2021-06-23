FROM node:14.16-alpine3.13
WORKDIR /usr/app
COPY package*.json .
RUN npm install
COPY . .
CMD ["npm", "start"]