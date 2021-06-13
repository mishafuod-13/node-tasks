FROM mishafuod/task6_node_1
WORKDIR /user
COPY package*.json .
RUN npm install
COPY . .
CMD ["npm", "start"]