FROM node:14-alpine
WORKDIR /user
COPY package*.json .
RUN npm install
COPY . .
CMD ["npm", "start"]