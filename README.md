
# User Api

The User API offers a comprehensive set of endpoints for managing user information. This API makes it easy to handle user registration, login, deletion, updating, and retrieval of user data.


## Features

- Register User (POST): https://api-user-five.vercel.app/api/users/register

- Login User (POST): https://api-user-five.vercel.app/api/users/login

- Get All Users (GET): https://api-user-five.vercel.app/api/users

- Get User by Id (GET): https://api-user-five.vercel.app/api/users/{id}

- Update User (PATCH): https://api-user-five.vercel.app/api/users/{id}

- Delete User (DELETE): https://api-user-five.vercel.app/api/users/{id}



## Authorization

Getting all users, getting a user by Id, updating a user, and deleting a user require an authorization token provided by the **Login User**. The token must be included in the request headers as follows:

    Authorization: Bearer <token>
## Request Body

Updating and Register a user require a request body in the following format:

    {
            "user_name": STRING,
            "user_password": STRING,
            "user_role": STRING
    }

Login a user require a request body in the following format:

    {
            "user_name": STRING,
            "user_password": STRING,
    }

## Technology

This API uses the following technologies:

- jsonwebtoken: Used to generate the authorization tokens for secure access to protected endpoints.
- crypto-js: Utilized for cryptographic operations, ensuring the security of user passwords and other sensitive information.

## Feedback

If you have any feedback, please reach out to me at reynard.satria@gmail.com


