import express from "express";

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("el server esta listo port:3000");
  });