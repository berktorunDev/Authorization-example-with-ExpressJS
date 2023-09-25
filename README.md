# Authorization Example with ExpressJS

This project is a sample application that demonstrates authentication and authorization in a Node.js and Express.js environment using JSON Web Tokens (JWT).

## Overview

The project includes the following key components:

- **Authentication:** Users can log in with their username and password. A JSON Web Token (JWT) is generated upon successful authentication.

- **Authorization:** Access to certain routes, such as the user's profile page, is restricted to authenticated users with a valid JWT.

## Project Structure

- `app.js`: The main application file.
- `routes/`: Contains route handling modules.
- `controllers/`: Contains controller functions for different routes.
- `middlewares/`: Contains middleware functions.
- `models/`: Contains data models.
- `config/`: Contains configuration files.

## Usage

To use the project, follow these steps:

1. **Start the Application:**
   - Navigate to the project directory.
   - Run the following command to start the application:

     ```bash
     node app.js
     ```

2. **Authentication (Login):**

   - Send a POST request to `http://localhost:8000/auth/login`.
   - Set the request headers to `Content-Type: application/json`.
   - In the request body, provide a JSON object with a valid username and password:

     ```json
     {
       "username": "user1",
       "password": "pwd1"
     }
     ```

   - Send the request. You should receive a JWT if authentication is successful.

   - **Possible Responses:**
     - **Successful Login:**
       ```json
       {
         "message": "Authentication is success!!!",
         "token": "<your-jwt-token>"
       }
       ```
     - **Failed Login:**
       ```json
       {
         "message": "Authentication is failed!!!"
       }
       ```

3. **Authorization (Accessing the Profile Page):**

   - Send a GET request to `http://localhost:8000/profile`.
   - Set the request headers to include the JWT received from the login step. Add a header with the key `Authorization` and the value `Bearer <your-token>`, replacing `<your-token>` with the JWT you received.
   - Send the request. You should receive a successful response if the JWT is valid.

   - **Possible Responses:**
     - **Successful Access:**
       ```json
       {
         "message": "Profile page"
       }
       ```
     - **Failed Access:**
       ```json
       {
         "message": "Authorization is failed!!!"
       }
       ```

These steps allow you to interact with the project and test its authentication and authorization features.
