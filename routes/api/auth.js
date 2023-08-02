const express = require("express");

const auth = require("../../controllers/auth/index");

const { validateBody, authenticate, upload } = require("../../middlewares");

const { schemas } = require("../../models/user");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), auth.register);

router.post("/login", validateBody(schemas.loginSchema), auth.login);

router.get("/current", authenticate, auth.getCurrent);

router.post("/logout", authenticate, auth.logout);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  auth.updateAvatar
);

module.exports = router;
