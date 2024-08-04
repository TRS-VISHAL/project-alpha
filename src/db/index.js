import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const mongoConnection = async () =>{
     try {
          const db = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
          console.log("db is connected succesefully !!",db.connection.host);
     } catch (error) {
          console.log("mongo db connection error", error);
     }
}
export default mongoConnection;