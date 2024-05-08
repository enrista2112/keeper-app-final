# keeper-app-final

My Keeper app is a note-taking application that allows users to create, read, and delete notes. Here's how it works:

The backend (server-side) of the application is built using Node.js and Express.js. It uses MongoDB as the database to store notes in a JSON-like format.

The frontend (client-side) of the application is built using React.js. The frontend contains components Header, Footer, Note, and App.

Requests:
When the application starts, the frontend makes a GET request to the server to fetch all existing notes from the database which means the data doesn’t go away upon refreshing.
Users can add a new note by filling out the form in the Note component and clicking the add button. This triggers a POST request to the server, which adds the new note to the database.
Users can delete a note by clicking the delete button on a Note component. This sends a DELETE request to the server, which removes the corresponding note from the database.

The frontend communicates with the backend through HTTP requests. These requests are handled by Express.js routes on the server. When a request is received, the server performs the necessary operations (such as querying the database or modifying data) and sends an appropriate response back to the client.

Responses from the server are in JSON format, which the frontend can then use to update its UI accordingly.

The server will run on http://localhost:4000 by default. The client will run on http://localhost:3000 by default.