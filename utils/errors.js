module.exports.checkErrors = ({ res, err }) => {
  if (err.message === "Not Found") {
    res.status(404).send({ message: "Resource not found" });
  } else if (err.name === "ValidationError" || err.name === "CastError") {
    res.status(400).send({ message: "Data is invalid" });
  } else {
    res.status(500).send({ message: "An error has occurred on the server." });
  }
};