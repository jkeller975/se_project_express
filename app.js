const express = require("express");
const path = require("path");
const usersRouter = require("./routes/users");
const cardsRouter = require("./routes/cards");

const { PORT = 3000 } = process.env;

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use("/", usersRouter);
app.use("/", cardsRouter);

app.use((req, res, next) => {
  res.status(404).send({ message: "Requested resource not found" });
  next();
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening at port ${PORT}`);
});
