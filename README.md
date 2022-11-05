# RS School REST service

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads). gjkghggjhghjgjhgjjhgghhgj
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading

```
git clone {repository URL}
```

## Installing NPM modules

```
npm install
```

## Running application

```
npm start
```

After starting the app on port (4000 as default) you can open
in your browser OpenAPI documentation by typing http://localhost:4000/doc/.
For more information about OpenAPI/Swagger please visit https://swagger.io/.

## Testing

After application running open new terminal and enter:

To run all tests without authorization

```
npm test
```

To run only one of all test suites (users, boards or tasks)

```
npm test <suite name>
```

To run all test with authorization

```
npm run test:auth
```

To run only specific test suite with authorization (users, boards or tasks)

```
npm run test:auth <suite name>
```

## Development

If you're using VSCode, you can get a better developer experience from integration with [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions.

### Auto-fix and format

```
npm run lint
```

### Debugging in VSCode

Press <kbd>F5</kbd> to debug.

For more information, visit: https://code.visualstudio.com/docs/editor/debugging

### Working with docker containers

1. Install Docker :

for Mac & Windows : https://docs.docker.com/desktop/
for Linux (Ubuntu example) : https://docs.docker.com/engine/install/ubuntu/

2. Start Docker-containers :

In the current working directory (where the docker-compose.yaml file is located) give the console command:
```
docker compose -p <your-image-name> up
```
If installed correctly, a message should appear in the console (may vary slightly on different systems):
```
postgres_1  | <current date> LOG:  database system is ready to accept connections
node_1      | App is running on http://localhost:<PORT_ENV>
```
3. Working with Docker-containers :

You can work with a running container via the command line:
```
docker exec -it <container_id_or_name> echo "Hello from container!"
```
For more information, please visit: https://docs.docker.com/engine/reference/commandline/exec/

4. Shutdown Docker-containers :

In the current working directory (where the docker-compose.yaml file is located) give the console command:
```
docker compose -p <your-image-name> down
```
5. Remote Docker-containers :
 
You can do this in several ways.
For more information, please contact: https://docs.docker.com/engine/reference/commandline/
