const { Router } = require("express");
const router = Router();
const {
  getAllUsers,
  addUser,
  deleteUser,
} = require("../controllers/usersControllers");

router.get("/", getAllUsers);
router.post("/add", addUser);
router.delete("/:id", deleteUser);

module.exports = router;
