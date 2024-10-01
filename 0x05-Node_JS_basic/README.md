NodeJS Basics Project

Welcome to the NodeJS Basics Project! This repository contains a series of tasks designed to introduce and reinforce foundational concepts in Node.js and Express.js. The project covers basic JavaScript execution with Node, file operations, HTTP server creation, and more advanced server-side operations using Express.
Project Overview
Tasks

    Executing Basic JavaScript with Node.js
    Implement a function to print messages to the console. This demonstrates the ability to run JavaScript with Node.js and manage exports and imports.

    Using Process stdin
    Create a command-line program to interact with user input via stdin, displaying a personalized message and a closing statement.

    Reading a File Synchronously with Node.js
    Develop a function to read a CSV file synchronously, process student data, and output statistics about the students in various fields.

    Creating a Small HTTP Server Using Node's HTTP Module
    Set up a basic HTTP server that responds with a simple message using Node's built-in http module.

    Creating a More Complex HTTP Server Using Node's HTTP Module
    Extend the HTTP server to provide additional routes and display student information based on the contents of a CSV file.

    Creating a Small HTTP Server Using Express
    Transition to using Express to set up an HTTP server, handling routes and responses with more ease and flexibility.

    Creating a More Complex HTTP Server Using Express
    Enhance the Express server to include dynamic student data from a CSV file and handle different routes for displaying student information.

    Organizing a Complex HTTP Server Using Express
    Refactor the server code into a modular structure, using controllers and routes to manage different aspects of the server. Implement ES6 syntax with Babel for modern JavaScript features.

File Descriptions

    0-console.js
    Contains a function to print a message to the console.

    1-stdin.js
    Implements a command-line application to read user input and print personalized messages.

    2-read_file.js
    Contains a function to read a CSV file synchronously and output student statistics.

    3-read_file_async.js
    Implements an asynchronous version of the file reading and processing function.

    4-http.js
    Sets up a basic HTTP server using Node's http module.

    5-http.js
    Extends the HTTP server to handle additional routes and display student information.

    6-http_express.js
    Creates an HTTP server using the Express framework.

    7-http_express.js
    Adds complex routing to the Express server for detailed student information.

    8.1-utils.js
    Contains utility functions for reading the database file asynchronously.

    8.2-AppController.js
    Defines the controller for handling the homepage route.

    8.3-StudentsController.js
    Defines controllers for handling student-related routes and responses.

    8.4-routes/index.js
    Configures the routes for the application.

    8.5-server.js
    Sets up the main Express server and integrates controllers and routes.

    .babelrc
    Babel configuration file for transpiling ES6 code.
