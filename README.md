# IIU AngularJS Starter
This is an Angular 1.X starter powered by Webpack for IIU projects.

## Installation
```
git clone https://github.com/informaticslab/iiu-angular-starter
cd iiu-angular-starter
yarn
```

## Development
```
yarn start
```
This will start up a webpack-dev-server with hot module replacement.

If you have an API exposed by a Node server, you can start up a development Express server by running:
```
yarn serve:dev
```

This will spin up a Nodemon monitored Express server.  The webpack-dev-server is configured to proxy HTTP calls
to /api/* routes to the Express server.

## Production
```
yarn build
yarn serve
```
This will generate minified assests in the /dist directory and server them up using the Express HTTP server.

## Tests

