# FormNest

**FormNest** is a simple form submission application built using **Express.js**, **MongoDB**, and **EJS**. Users can submit their name and email via a form, and the data gets stored in a MongoDB database. The stored data is displayed on the page, with each entry showing its name, email, and creation timestamp in a user-friendly format.

## Purpose
The main purpose of this project is to serve as a mini-project for quick revision of Node.js concepts. It provides a practical example of how to:
- Set up an Express.js server.
- Connect to a MongoDB database using Mongoose.
- Use EJS templates to render dynamic content.
- Manage environment variables securely.

This project can be revisited whenever a refresher on Node.js basics is needed.

## Features
- Submit form data (name and email).
- Store form data in MongoDB.
- Display submitted data with timestamps.
- Clean and simple UI with EJS templating.

## Technologies Used
- **Node.js** with **Express.js** for backend development.
- **MongoDB** for data storage.
- **Mongoose** for database interaction.
- **EJS** for templating and rendering dynamic HTML.

## Installation

1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd FormNest
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the project root and add your MongoDB connection string:
   ```
   MONGO_URL=your-mongodb-connection-string
   ```

5. Start the server:
   ```bash
   npx nodemon server.js
   ```

6. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

