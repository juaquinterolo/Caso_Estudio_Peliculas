import app from "./app.js";

const PORT = 27017;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:27017`);
});