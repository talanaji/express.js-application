import express from "express";
import data from "./data/data.json";
const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.use("/images", express.static("images"));

app.get("/", (req, res) => {
  //res.send(`a get request with / route on port ${PORT}`);
  res.json(data);
});
app
  .route("/item")
  .get((req, res) => {
    res.send(`a get request with /item route on port ${PORT}`);
  })
  .put((req, res) => {
    res.send(`a put request with /newItem route on port ${PORT}`);
  })
  .delete((req, res) => {
    res.send(`a delete request with /item route on port ${PORT}`);
  });
app.get(
  "/item/:id",
  (req, res, next) => {
    //res.send(`a get request with / route on port ${PORT}`);
    console.log(req.params.id);
    let user = Number(req.params.id);
    console.log(user);
    console.log(data[user]);
    res.send(data[user]);
    next();
  },
  (req, res) => console.log("did you get the right data")
);
app.post("/newItem", (req, res) => {
  res.send(`a post request with /newItem route on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Your server running on port ${PORT}`);
  console.log(data);
});
