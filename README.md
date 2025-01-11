# User Authentication System

## Description
A basic user authentication system built with **Node.js**, **Express.js**, and **MongoDB**. It provides functionality for user registration and login with basic validation.

## Features
- **Sign-Up**: Register users with `username`, `password`, `firstname`, and `lastname`.
- **Sign-In**: Authenticate users with their credentials.
- **Database**: MongoDB is used for data storage, managed with Mongoose.
- **Validation**: Ensures all required fields are provided.

## Tech Stack
- **Backend**: Node.js with Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Dependencies**:
  - `express`: Web framework for Node.js.
  - `mongoose`: MongoDB object modeling tool.
  - `body-parser`: Middleware for parsing request bodies.
  - `cors`: Middleware for enabling Cross-Origin Resource Sharing.

## API Endpoints
- `POST /signup`: Register a new user.
- `POST /signin`: Authenticate an existing user.


