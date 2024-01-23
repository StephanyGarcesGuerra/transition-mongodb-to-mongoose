import express from 'express';
import './localenv.js';
import {conn} from './db/conn.js'; conn();
import morgan from 'morgan';
import mongoose from 'mongoose';

import gradesRoute from "./routes/grades.js";

const app = express();
const port = process.env.PORT || 3010;  // says use the port noted in the .env file or (||) port 3000

// import gradesRoute from "./routes/grades.js";
// import grades from './models/grades.js';

app.use (morgan('dev'));
app.use(express.json());

//routes
app.use('/grades', gradesRoute);

app.get("/grades", (req, res) => {
  res.send("In order to see grades, include the ID of the student in the URL.");
});


// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Seems like we messed up somewhere...");
});


//Listening
app.listen(port,async() => {
    console.log(`Server is running on port ${port}`);
});

