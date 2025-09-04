import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/cineDB");
    console.log("MongoDB conectado");
  } catch (error) {
    console.error("Error al conectar MongoDB:", error);
  }
};

export default connectDB;
