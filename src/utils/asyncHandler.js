const asyncHandler = (reqHandler) => {
  (req, res, next) => {
    Promise.resolve(reqHandler(req, res, next)).catch((err) => {
      next(err);
    });
  };
};
export { asyncHandler };

// const asyncHandler1 = (reqHandler1) => async (req, res, next) => {
//   try {
//     await reqHandler1(req, res, next);
//   } catch (err) {
//     next(err);
//     res.status(500).send;
//   }
// };
``