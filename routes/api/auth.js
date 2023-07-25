const express = require("express");

const auth = require("../../controllers/auth/index");

const { validateBody } = require("../../middlewares");

const { schemas } = require("../../models/user");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), auth.register);

router.post("/login", validateBody(schemas.loginSchema), auth.login);

module.exports = router;
