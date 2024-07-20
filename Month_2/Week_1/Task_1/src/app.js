import Express from "express";

// Initialize an Express App
const App=Express();

const PORT=3000;

// To take JSON data as request body
App.use(Express.json());

import UserRouter from "./Routes/user.routes.js";
App.use("/api/v1/users",UserRouter);



export {App,PORT};