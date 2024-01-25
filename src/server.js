// server.js
const express = require('express');
const v1Routes = require('./routes/v1');
const morgan = require('morgan');
const createError = require('http-errors') 
const { initDatabase } = require('./helpers/init_mysql');

const AuthRoute = require('./routes/v1/Auth.route');

require('dotenv').config()

const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))




// Initialize the MySQL database
initDatabase()



// To check if server running
app.use('/', v1Routes);
// Auth Routes
app.use('/auth', AuthRoute);


app.use(async (req,res,next) => {
  // const error = new Error("Not found");
  // error.status = 404
  // next(error)
  next(createError.NotFound());
});

app.use((err,req,res,next) => {
  res.status(err.status || 500)
  res.json({
    error: {
      status: err.status || 500,
      message: err.message,
    }
  })
});


// ... other routes and middleware

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
