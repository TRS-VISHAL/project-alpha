import dotenv from "dotenv";
import { app } from "./app.js";
import mongoConnection from "./db/index.js";

dotenv.config({ path: "./env" });

mongoConnection()
.then(()=>{
     app.listen(process.env.PORT || 8000 , ()=>{
          console.log(`db connection established on port ${process.env.PORT}`);
     })
})
.catch((error) => {
     console.log(`db connection is failed: ${error}`);
});
