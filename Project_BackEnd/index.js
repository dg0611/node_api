import { express } from "express";
import { pkg } from "body-parser";
import { router } from "./routes/router.js";

const app = express();
const { json, urlencoded}= pkg

app.use(json());
app.use( urlencoded({extends:true}));

app.listen(3000, ()=>{
    console.console.log("Escutando porta 3000");
})

app.use("/", router);
