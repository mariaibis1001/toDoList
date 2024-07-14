# DoNow - To-Do List Web App

DoNow is a simple web application built using Node.js and Express.js that allows users to manage their daily tasks effectively. Users can add tasks, mark them as completed, and delete unwanted tasks with ease.

## Live Application

The live version of DoNow is hosted on Render. You can access it using the following link:

[DoNow Live](https://donow.onrender.com/)

## Features

- **Add Tasks**: Easily add new tasks to your to-do list.
- **Mark as Completed**: Mark tasks as completed when finished.
- **Delete Tasks**: Remove tasks that are no longer needed.
- **Colorful Interface**: Each task card displays in a flashcard background color for a visually appealing experience.

## Technologies Used

- **Node.js**: Backend server environment.
- **Express.js**: Web framework for Node.js.
- **Bootstrap**: Frontend framework for styling.
- **EJS**: Templating engine for generating HTML with JavaScript.
- **Body-parser**: Middleware for handling form data.

## File Structure

### `index.js`

The main server file (`index.js`) sets up the Express server, handles routing, and manages task functionalities including adding, marking as completed, and deleting tasks.

### `index.ejs`

The homepage (`index.ejs`) introduces the app and its features, providing a brief overview and encouraging users to get started with their to-do lists.

### `toDo.ejs`

The to-do list page (`toDo.ejs`) allows users to view, add, and interact with their tasks. Each task card dynamically changes background color and offers options to mark as done or delete.

### `done.ejs`

The completed tasks page (`done.ejs`) displays tasks that have been marked as completed, encouraging users to celebrate their accomplishments.

## Getting Started

To run the application locally:

1. Clone this repository to your local machine:
   - git clone <repository-url>
2. Navigate to the project directory:
   - cd <project-directory>
3. Install dependencies using npm:
   - npm install
4. Start the server:
   - node index.js
5. Open your web browser and go to http://localhost:3000 to view the application.

  
