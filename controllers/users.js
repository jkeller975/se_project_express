const path = require("path");
const getDataFromFile = require("../helpers/files");

const dataPath = path.join(__dirname, "..", "data", "users.json");

const getUsers = (req, res) =>
  getDataFromFile(dataPath)
    .then((users) => res.status(200).send(users))
    .catch(() =>
      res.status(500).send({ message: "An error has occurred on  the server" })
    );

const getProfile = (req, res) =>
  getDataFromFile(dataPath)
    .then((users) => users.find((user) => user._id === req.params.id))
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: `There is no user with the id of ${req.params.id}`,
        });
      }
      return res.status(200).send(user);
    })
    .catch(() => res.status(500).send({ message: "Server Error" }));

module.exports = { getUsers, getProfile };
