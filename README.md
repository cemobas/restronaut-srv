# Restronaut-Srv
RESTful JS backend API for Restronaut app, which promotes instant offers of venues in town.

## package.json facts
We've imported several packages to use, but why do we need them?

### babel
Without babel, nodemon would return an error, because we wouldn't be able to run it with javascript. We need to compile it with es6 to start the server and run it properly.
```
"start": "nodemon ./index.js --exec babel-node -e js"
```

### body-parser
It allows us to send objects or data through http post, (through our db). Get the right data and post it to our db (or api).

## Middleware
Middleware are functions that have access to request and response object in our express application. It can make changes to req/res object, stop, next, etc.

## Mongodb on MAC
Once you install mongodb, create the following dir and go to your db directory (sudo'ing if needed)
```
mkdir -p /data/db
cd /data/db
```

Run this cmd to complete read/write access
```
sudo chmod 0755 /data/db sudo chown $USER /data/db
```

Run mongo daemon in a terminal to start listening on default port 27017
```
mongod
```