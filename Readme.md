# EmployWise Assignment - React Application

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Building for Production](#building-for-production)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Error Handling](#error-handling)
- [Persistence](#persistence)
- [Deployment](#deployment)

## Introduction
This React application integrates with the Reqres API to perform basic user management functions, including authentication, listing users, editing user details, and deleting users.

## Features
- **Authentication:** Users can log in using provided credentials.
- **User Management:** List all users with pagination, edit user details, and delete users.
- **Responsive UI:** Works on both desktop and mobile devices.
- **Error Handling:** Displays appropriate error messages.
- **Persistence:** Stores the authentication token in local storage.
- **Navigation:** Uses React Router for seamless navigation.

## Prerequisites
Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (Recommended: Latest LTS version)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) (Comes with Node.js)

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/EmployWise.git
   ```
2. Navigate to the project directory:
   ```sh
   cd EmployWise
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
   or, if using Yarn:
   ```sh
   yarn install
   ```

## Running the Project
To start the development server, run:
```sh
npm start
```
or, if using Yarn:
```sh
yarn start
```
The application will be available at `http://localhost:3000/` by default.

## Building for Production
To create a production build, run:
```sh
npm run build
```
or, if using Yarn:
```sh
yarn build
```
This will generate a `build/` directory with optimized production files.

## Project Structure
```
/EmployWise
│── src/
│   ├── App.js            # Main application entry
│   ├── index.js          # React entry file
└── public/               # Static assets
```

## API Endpoints
- **Login:** `POST https://reqres.in/api/login`
- **Get Users:** `GET https://reqres.in/api/users?page=1`
- **Update User:** `PUT https://reqres.in/api/users/{id}`
- **Delete User:** `DELETE https://reqres.in/api/users/{id}`

## Technologies Used
- React.js
- React Router
- Native fetch API for API requests
- Custom CSS for styling
- Local Storage for token persistence

## Error Handling
- Displays messages for login failures, user updates, and deletions.
- Handles network errors gracefully.

## Persistence
- Stores authentication token in local storage.
- Redirects to login if the token is missing or expired.

## Deployment
The website is hosted at: [EmployWise](https://employwise.pages.dev/)

