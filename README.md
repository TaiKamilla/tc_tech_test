# TODO CRUD API

## Commands

### Run with docker
To start the service, run:

```bash
npm run docker:start
```

After the service is runinig you can access the API swagger documentation at:

**[http://localhost:3000/v1/docs](http://localhost:3000/v1/docs)**

### Run tests (with docker)

```bash
npm run docker:test
```


### Run locally

To run the service locally, you need to have a MongoDB instance running.
Then modify the .env file to point to the MongoDB instance.
After that, run:

```bash
npm install
npm start
```

## Features

- DB: MongoDB
- API Documentation: Swagger
- Environment variables: dotenv
- Security headers: helmet
- Sanitize input: express-mongo-sanitize and xss-clean
- CORS: cors
- Compression: compression

## Architecture decisions

- The API is built using Node.js and Express.js.
- The folder structure is based on the MVC pattern.
- The API is versioned, so it's possible to have multiple versions running at the same time.


## Things to improve for a production ready API

- Add more tests (Jest)
- Add authentication (JWT and Passport)
- Validate input (Joi)
- Add pagination (Mongoose)
- Add sorting (Mongoose)
- Add filtering (Mongoose)
- Add logging (Winston and Morgan)
- Add monitoring (pm2)
- Reinforce type checking (TypeScript)
- OpenAPI specification (Swagger)
- Error handling (Express error handling middleware)
- There is a few TODOS comments if you search for "TODO" in the codebase

### Missing features due to time constraints and no specific requirements:
The relation between TODO entities and labels and use cases for the API were not clear.

Since the label API can have errors and delays the API retries 5 times with a 1 second delay between each retry and then gives up.

The creation of a TODO does not validate if the labels exist.

The API is not production ready, but it's a good starting point.


## Things you can try:

- Create a TODO
- Get a TODO
- Update a TODO
- Delete a TODO





