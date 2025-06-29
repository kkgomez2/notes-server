import express from "express";
import notesRoutes from "./routes/notesRoutes.js"

const app = express();

app.use("/api/notes", notesRoutes);

app.listen(3001, () => {
  console.log("Server started");
  console.log("Listening on localhost:3001");
})