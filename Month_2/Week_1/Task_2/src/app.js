import Express from "express";

// Initialize an Express App
const App=Express();

const PORT=3000;

// To take JSON data as request body
App.use(Express.json());


export default App;