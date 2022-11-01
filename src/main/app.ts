"use strict";

// Outside modules
import express, {Application, Request, Response, NextFunction} from "express";
// const morgan = require("morgan");

import dotenv from "dotenv";

// require("dotenv").config();
// const cors = require("cors");
dotenv.config();
const app: Application = express();

// My Routes
// const projectRoute = (version) =>
//   require(`./routes/projects/${version}/projects-api`);

// Global Middleware
// app.use(cors());
app.use(express.json());
// app.use(morgan("dev"));

app.get("/", (req: Request, res: Response) => {        
  res.send("test");    
});






export default {
  server: app,
  start: (port?:number) => {
    const PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Listening to port ${PORT}`);
    });
  },
};