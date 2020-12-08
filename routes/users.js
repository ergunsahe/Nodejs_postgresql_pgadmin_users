var express = require('express');
var router = express.Router();
const usersController = require("../controllers/usersController")

/* GET /users */
router.get('/', usersController.get_users);
router.get('/add', usersController.show_add_user_form);
router.post("/add", usersController.add_user)
router.get("/:id/delete", usersController.delete_user)

router.get("/:id/:firstName/:lastName/edit", usersController.show_edit_user_form)
router.post("/:id/:firstName/:lastName/edit", usersController.edit_user)

module.exports = router;
