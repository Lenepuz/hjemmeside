const express = require("express");
const app = express();
const port = 17000;
const path = require("path");
const bodyParser = require("body-parser");
const fornavnliste = ["Lene", "Marius", "Randi", "Frode", "Kim"];

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/navn.html"));
});
app.post("/", (req, res) => {
  if (fornavnliste.includes(req.body.navn)) {
    res.redirect("/vits");
  } else {
    res.redirect("/ikkevits");
  }
});
app.get("/vits", (req, res) =>
  res.sendFile(path.join(__dirname + "/vits.html"))
);
app.get("/ikkevits", (req, res) =>
  res.sendFile(path.join(__dirname + "/ikkevits.html"))
);
app.get("/index.css", (req, res) =>
  res.sendFile(path.join(__dirname + "/index.css"))
);
app.get("/host.jpg", (req, res) =>
  res.sendFile(path.join(__dirname + "/host.jpg"))
);
app.get("/laugh_cat_001.png", (req, res) =>
  res.sendFile(path.join(__dirname + "/laugh_cat_001.png"))
);
app.get("/pile-of-poo_001.png", (req, res) =>
  res.sendFile(path.join(__dirname + "/pile-of-poo_001.png"))
);
app.get("sloyfe_1.png", (req, res) =>
  res.sendFile(path.join(__dirname + "/sloyfe_1.png"))
);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
