//This function will help us to avoid using try/catch blocks in our controllers.
const awaitAsync = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((err) => next(err));
};
export default awaitAsync;