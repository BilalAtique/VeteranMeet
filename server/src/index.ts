// import { sharedFunction } from "@bitflipz/shared";
import { sharedFunction } from "../../shared";

sharedFunction();

import express from "express";
import routes from "./routes";
import connect from "./utils/connect";

const app = express();
app.use(express.json());


app.listen(3030, async() => {
    console.log("App is listening on port 3000");
    await connect();
    routes(app);
})
