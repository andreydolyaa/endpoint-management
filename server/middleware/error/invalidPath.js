export const invalidPathHandler = (req, res) => {
  res.status(404).send("No such path!");
};
