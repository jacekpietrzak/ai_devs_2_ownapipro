const { Router } = require("express");
const router = Router();

const answerRoute = require("./answerRoute");

router.get("/", async (req, res, next) => {
  res.send("Hello from the API");
});

router.use("/answer", answerRoute);

module.exports = router;
