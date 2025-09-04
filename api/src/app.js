import express from "express";
import connectDB from "./database.js";
import generoRoutes from "./routes/genero.routes.js";
import directorRoutes from "./routes/director.routes.js";
import productoraRoutes from "./routes/productora.routes.js";
import tipoRoutes from "./routes/tipo.routes.js";
import mediaRoutes from "./routes/media.routes.js";


const app = express();
connectDB();

app.use(express.json());


app.use("/api/generos", generoRoutes);
app.use("/api/directores", directorRoutes);
app.use("/api/productoras", productoraRoutes);
app.use("/api/tipos", tipoRoutes);
app.use("/api/media", mediaRoutes);

export default app;