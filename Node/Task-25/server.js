const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = 3000;

const DB_URL ="mongodb://127.0.0.1:27017/admin";

const bookSchema = new mongoose.Schema({
  seat: String,
  amen: String,
  price: String,
});

const Book = mongoose.model("Book", bookSchema);
const roomSchema = new mongoose.Schema({
  name: String,
  date: String,
  start: String,
  end:String,
  roomId:String
});
  
  app.use(bodyParser.json());
  
  //Connect to MongoDB
  mongoose
    .connect(DB_URL, {})
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Could not connect to MongoDB", err));

    // CREATE - Add a new book

    app.post("/bookHall", async (req, res) => {
      const book = new Book(req.body);
      try {
        const savedBook = await book.save();
        res.status(201).send(savedBook);
      } catch (error) {
        res.status(400).send(error.message);
      }
    });
    //book room
   
const Room = mongoose.model("Room", roomSchema);
  
  app.use(bodyParser.json());
  
  app.post("/bookRoom", async (req, res) => {
    const book = new Room(req.body);
    try {
      const savedBook = await book.save();
      res.status(201).send(savedBook);
    } catch (error) {
      res.status(400).send(error.message);
    }
  });
    app.listen(PORT, () => {
        console.log("Server is running on PORT", PORT);
      });
      