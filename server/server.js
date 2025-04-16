// MOST IMPORTANT FOR REST API!
const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

// Importing the table, so it appears in our sql scheme
const db = require('./models');

// Routers
const postRouter = require('./routes/Posts');
app.use("/posts", postRouter); // Middleware for router
const commentsRouter = require('./routes/Comments');
app.use("/comments", commentsRouter); // Middleware for router
const usersRouter = require('./routes/Users');
app.use("/auth", usersRouter); // Middleware for router

db.sequelize.sync().then(() => {
  // Starting / running the API
  app.listen(3001, () => {
    console.log('Server running on port 3001');
  });
});




