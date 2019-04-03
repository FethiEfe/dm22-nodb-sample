const express = require("express");
const app = express();
const { getAllWishes, addWish, deleteWish } = require("./controller");
const PORT = 5050;

app.use(express.json());

app.get("/api/wishes", getAllWishes);
app.post("/api/wishes", addWish);
app.delete("/api/wishes/:name", deleteWish);

app.listen(PORT, () => console.log(`Hey it's me on ${PORT}`));
