# 11 Express.js: Note Taker

## Description

The Note Taker App is an application that is used to view, write and delete notes. The project has a starter code and the aim of the homework is to add the respective routes and the backend functions to save and retrieve the notes. This application will uses Express.js for the backend back end and saves and retrieves data from a JSON file.

After building the the back end, connect it to the frontend, the application is deployed to Heroku.

## Technologies used

- Express.js & Node.js frameworks.
- HTTP POST request method to submit data to the server
- Postman: testing APIs
- Express.static(): to serve the static files
- Middleware: used to handle data parsing & extend library functionality

## Getting Stated

The application has a `db.json` file on the back end that is used to store and retrieve notes using the `fs` module.

The following HTML routes have been created:

- `GET /notes` returns the `notes.html` file.

- `GET *` returns the `index.html` file.

The following API routes have been created:

- `GET /api/notes` reads `db.json` file and returns all saved notes as JSON.

- `POST /api/notes` should write a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. Each mote is given each note a unique id when it's saved.

Install the packages and run the start script:

`npm init -y`

`npm i express`

`npm i nodemon -D `

`pm i express cors `

`npm install uuidv4 `

`npm run start`

## Printscreens

The following images show the web application's appearance and functionality:

![Existing notes are listed in the left-hand column with empty fields on the right-hand side for the new note’s title and text. Existing nodes can be deleted in the left side](./assets/note-taker.gif)

## Links

[Github Repository Link](https://github.com/vilmaq/note-taker)

[Heroku Deployment Link](http://vilma-note-taker.herokuapp.com/notes)
