export const globalErrorHandler = async (err, req, res, next) => {
  console.error(err);
  res.status(500).send("Something went wrong!");
};
