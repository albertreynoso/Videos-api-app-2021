import mongoose, { ConnectionOptions } from "mongoose";
import config from "./config";

//This function is executed each time it's called
(async () => {
  try {
    const mongooseOptions: ConnectionOptions = {
      //use this to omit the deprecation warning of mongoose.
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      // user: config.MONGO_USER,
      // pass: config.MONGO_PASSWORD
    };
    const db = await mongoose.connect(
      "mongodb+srv://Alberto-2021:Alberto11225192116@cluster0.rehhj.mongodb.net/mern-db?retryWrites=true&w=majority",
      mongooseOptions
    );
    console.log("database is connected to: ", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
