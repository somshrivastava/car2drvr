// For our API we will use the Functions 2nd Gen HTTP Request trigger
// See this: https://firebase.google.com/docs/functions/http-events?gen=2nd
// Import onRequest from firebase-functions for HTTP triggers.
import { onRequest } from "firebase-functions/v2/https";

// Import the entire Express module. This allows us to use its
// functionalities to create and manage the server.
import express from "express";

// Import the Request and Response types from the 'express' module.
// These types are used to type the request and response objects in
// route handlers, providing type checking and IntelliSense features in the IDE.
import { Request, Response } from "express";

// Create a new Express application by calling `express()`.
// This `app` object encapsulates all the functionalities of an
// Express application.
// It's used to configure routes, middleware, and to start the server.
const app = express();

// Define a route handler for HTTP GET requests to the root URL ("/").
// This sets up the server to respond to GET requests at the
// specified path. Here, the path is the root URL.
// eslint-disable max-len
// `req` (request) and `res` (response) are parameters typed with
// `Request` and `Response` to enhance type safety and tooling support.
// The handler function sends the text "Hello World!" back to the
// client when the root URL is accessed.
app.get("/get_help", (req: Request, res: Response) => res.send("Hello World!"));

// Export the `app` instance as `api`. This exported `api` can be used
// elsewhere, particularly in Firebase Functions, to handle
// HTTP requests. This allows the `api` to act as a
// serverless function in the Firebase ecosystem.
exports.api = onRequest(app);
