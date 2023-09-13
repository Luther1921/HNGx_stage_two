# # A simple REST API capable of CRUD operations on a "person" resource.

This project provides a simple REST API for managing person records, allowing you to perform CRUD (Create, Read, Update, Delete) operations. This README.md file contains detailed instructions on setting up, running, and using the API.

> Complete and detailed documentation on [Postman](https://documenter.getpostman.com/view/27866602/2s9YC31Zc5)
>
> LIVE API Endpoint is https://hngx-backend-ruwc.onrender.com/api
>


## Table of Contents

- [Model Diagrams](#model-diagrams)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Install Dependencies](#2-install-dependencies)
   - [3. Declare the environment variables ](#3-declare-the-environment-variables)
  - [4. Run the API Locally](#4-run-the-api-locally)
- [API Endpoints](#api-endpoints)
- [Request/Response Formats](#requestresponse-formats)
- [Known Limitations and Assumptions](#known-limitations-and-assumptions)
- [Deployment](#deployment)

---

## Model Diagrams

- Unified Modeling Language (UML)
> ![uml](![UML](https://github.com/Luther1921/HNGx_stage_two/assets/115670341/e8c0f80a-16fd-430e-8b8e-b35fc29233ca)
)
-  Entity-Relationship Diagram (ERD)
> ![erd](erd.png)

---

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js v18.17.1 or higher installed.
- Git installed (for cloning the repository).
- A code editor or IDE of your choice.

---

## Getting Started

Follow these steps to set up and run the API locally.

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
https://github.com/Luther1921/HNGx_stage_two.git
cd HNGx_stage_two
```

### 2. Install Dependencies

Install the required Node.js dependencies using `npm`:

```bash
npm install express node nodemon  mongoose dotenv 
```

This will install Express, Nodemon, mongoose and any other necessary packages.

### 3. Declare the Environment Variable

create a .env in the root directory and set the following environment variables
PORT = 3030
DATABASE_URL = your database url as string

---
### 4. Run the API Locally

To run the API locally, use the following command:

```bash
node index.js
```

This will start the API server, and it will be available at `http://127.0.0.1:3030`.

---

## API Endpoints

The API provides the following endpoints for CRUD operations on the "Person" resource:

- **Create a Person**:
  - **POST /api/**
  - Add a new person to the database.
 
  - **Fecth all Person(s)**:
  - **GET /api/**
  - Retrieve details of all person(s) in the database.

- **Fecth a specific Person**:
  - **GET /api/:id**
  - Retrieve details of a person by id.

- **Update an Existing Person**:
  - **PUT /api/:id**
  - Modify details of an existing person by Id.

- **Delete an Existing Person**:
  - **DELETE /api/:id**
  - Remove a person from the database by id.

---

## Request/Response Formats

### Create a Person (POST /api/)

**Request Format:**

```json
{
  "name": "Odelana Martins",
  
}
```

**Response Format (Created - 201):**

```json
{
    "message": "Created Successfully!",
    "person": {
        "name": "Odelana Martins",
        "_id": "6500462fa5e5d66cb0bf93a6",
        "createdAt": "2023-09-12T11:06:23.965Z",
        "updatedAt": "2023-09-12T11:06:23.965Z",
        "__v": 0
    }
}
```
### Fetch all Person(s) (GET /api/)

**Response Format (Success - 200):**

```json
{
    "message": "People gotten successfully!",
    "person": [
        {
            "_id": "65004469b000d29bfd859144",
            "name": "Luther king",
            "createdAt": "2023-09-12T10:58:49.406Z",
            "updatedAt": "2023-09-12T10:58:49.406Z",
            "__v": 0
        },
        {
            "_id": "6500462fa5e5d66cb0bf93a6",
            "name": "Odelana Martins",
            "createdAt": "2023-09-12T11:06:23.965Z",
            "updatedAt": "2023-09-12T11:06:23.965Z",
            "__v": 0
        }
    ]
}
```


### Fetch a Person (GET /api/:id)

**Response Format (Success - 200):**

```json
{
    "message": "gotten successfully!",
    "person": {
        "_id": "65002f42c3fdddc6d58067a2",
        "name": "Odelana Martins",
        "createdAt": "2023-09-12T09:28:34.349Z",
        "updatedAt": "2023-09-12T09:28:34.349Z",
        "__v": 0
    }
}
```

**Response Format (Not Found - 404):**

```json
{
    "error": "cannot find the person with the id ${id}"
}
```

### Update a Person (PUT /api/:id)

**Request Format:**

```json
{
    "name" : "Martins Luther"
}
```

**Response Format (Success - 200):**

```json
{
    "message": "Person updated successfully!",
    "updatedPerson": {
        "_id": "65002f42c3fdddc6d58067a2",
        "name": "Martins Luther",
        "createdAt": "2023-09-12T09:28:34.349Z",
        "updatedAt": "2023-09-12T09:35:07.672Z",
        "__v": 0
    }
}
```

**Response Format (Not Found - 404):**

```json
{
    "error": "cannot find the person with the id ${id}"
}
```

### Delete a Person (DELETE /api/:id)

**Response Format (Success - 200):**

```json
{
    "message": "Person deleted successfully"
}
```

**Response Format (Not Found - 404):**

```json
{
    "error": "cannot find the person with the id ${id}"
}
```

---



---

## Known Limitations and Assumptions

- This API uses a mongoDB as database for demonstration purposes.
- Authentication and authorization mechanisms are not implemented here. Ensure secure access to your API in a real-world scenario.
- This documentation assumes that you have successfully set up the API locally.

---

## Deployment

To deploy this API to a production server, follow the appropriate deployment practices for RESTFUL api. Ensure proper security measures, such as using HTTPS, implementing authentication, and securing sensitive data.
