import App from "./app.js";

App.on("error", (error) => {
    console.log("Server Error", error);
});

// This PORT will usually come from environment variables using dotenv package 
App.listen(3000, () => {
    console.log("Server is running on port ", 3000);
})