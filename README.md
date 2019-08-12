# Restronaut-Srv
RESTful JS backend API for Restronaut app, which promotes instant offers of venues in town.

## package.json facts
Without babel, nodemon would return an error, because we wouldn't be able to run it with javascript. We need to compile it with es6 to start the server and run it properly.
```
"start": "nodemon ./index.js --exec babel-node -e js"
```
## Middleware
Middleware are functions that have access to request and response object in our express application. It can make changes to req/res object, stop, next, etc.