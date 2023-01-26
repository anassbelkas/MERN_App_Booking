import Express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import auth from "./routes/auth.js";
import users from "./routes/users.js";
import hotels from "./routes/hotels.js";
import rooms from "./routes/rooms.js";

const app = Express();
dotenv.config();

const connect = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected.");
});
mongoose.connection.on("connected", () => {
  console.log("MongoDB connected.");
});

//middlewares
app.use(Express.json());

app.use("api/auth", auth);
app.use("api/users", users);
app.use("api/hotels", hotels);
app.use("api/rooms", rooms);

app.listen(8800, () => {
  connect();
  console.log("Backend connected.");
});
