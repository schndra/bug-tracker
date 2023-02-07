import express from "express";
const app = express();

//middlewares
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

//massage data
app.use(express.json());

//dummy route
app.get("/", (req, res) => {
  res.send("hello world!!!");
});

//if user navigate to a wrong route
app.use(notFoundMiddleware);
//server errors
app.use(errorHandlerMiddleware);

const port = 5000;

app.listen(port, console.log(`listening on port ${port} ...`));
