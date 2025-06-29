import express from "express";

const app = express();

app.get("/api/notes", (req, res) => {
  res.send("you got 5 notes");
});

app.post("/api/notes", (req, res) => {
  res.send("you just created 6 notes");
});

app.put("/api/notes", (req, res) => {
  res.send("you just updated 7 notes");
});


app.delete("/api/notes", (req, res) => {
  res.send("you just deleted all of the notes");
});

app.listen(3001, () => {
  console.log("Server started");
  console.log("Listening on localhost:3001");
})