import express from "express";
// import cors from "cors";
import mongoose from "mongoose";
import { pizza } from "./data/pizza.js";
import { combo } from "./data/combo.js";
import { snacks } from "./data/snacks.js";
import { desserts } from "./data/desserts.js";
import { drinks } from "./data/drinks.js";

let app = express();
app.use(express.json());
// app.use(cors());

app.get("/pizza", async (request, response) => {
  console.log(await request.body);
  try {
    response.send(JSON.stringify(pizza));
    response.sendStatus(200);
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/combo", async (request, response) => {
  console.log(await request.body);
  try {
    response.send(JSON.stringify(combo));
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/dessert", async (request, response) => {
  console.log(await request.body);
  try {
    response.send(JSON.stringify(dessert));
  } catch (error) {
    console.log(error.message);
  }
});
app.get("/snacks", async (request, response) => {
  console.log(await request.body);
  try {
    response.send(JSON.stringify(snacks));
  } catch (error) {
    console.log(error.message);
  }
});
app.get("/drinks", async (request, response) => {
  console.log(await request.body);
  try {
    response.send(JSON.stringify(drinks));
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(5000, () => console.log("The server has been started"));
