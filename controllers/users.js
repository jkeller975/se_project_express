const User = require("../models/user");
const { checkErrors } = require("../utils/errors");

const getUsers = (req, res) => {
  User.find({})
    .orFail(new Error("No users found"))
    .then((users) => {
      res.status(200).send({ data: users });
    })
    .catch((err) => {
      checkErrors({ res, err });
    });
};

const getProfile = (req, res) => {
  User.findById(req.params.userId)
    .orFail(new Error("No user found with that id"))
    .then((users) => {
      res.status(200).send({ data: users });
    })
    .catch((err) => {
      checkErrors({ res, err });
    });
};

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.status(201).send({ data: user }))
    .catch((err) => {
      if (err.name === "ValidationError") {
        res.status(400).send({
          message: `${Object.values(err.errors)
            .map((error) => error.message)
            .join(", ")}`,
        });
      } else {
        checkErrors({ res, err });
      }
    });
};

const updateProfile = (req, res) => {
  const { name, about } = req.body;
  const { _id } = req.user;

  User.findByIdAndUpdate(
    _id,
    { name, about },
    { new: true, runValidators: true }
  )
    .orFail(new Error("Not Found"))
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      checkErrors({ res, err });
    });
};

const updateAvatar = (req, res) => {
  const { avatar } = req.body;
  const { _id } = req.user;

  User.findByIdAndUpdate(_id, { avatar }, { new: true, runValidators: true })
    .orFail(new Error("Not Found"))
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      checkErrors({ res, err });
    });
};

module.exports = {
  getUsers,
  getProfile,
  createUser,
  updateProfile,
  updateAvatar,
};
