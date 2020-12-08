const userModel = require("../models/User")

exports.get_users = async (req, res, next) => {
  // get users from db
  try {
    const userList = await userModel.findAll()
    console.log(userList)
    res.render('users', {userList});
  } catch (error) {
    res.send("An error occured")
  }
  
  }

  // get request
exports.show_add_user_form = (req, res) => {
  res.render("addUser")
}

// post request
exports.add_user = async (req, res) => {
  
  
  try {
    const newUser = await userModel.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName
    })
    res.redirect("/users")
  } catch (error) {
    res.send("An error ocuured")
  }
  
}

exports.delete_user = async (req, res) => {
  
  try {
    await userModel.destroy({
      where: {
        id : req.params.id
      }
    })
    res.redirect("/users")
  } catch (error) {
    console.log("error", error)
  }
}

exports.show_edit_user_form = (req, res) => {

  res.render("editUser", {firstName: req.params.firstName, lastName:req.params.lastName})
}
  
exports.edit_user = async (req, res) => {
  try {
    await userModel.update({
      firstName: req.body.firstName,
      lastName: req.body.lastName
      
    }, 
    {
      where: {
        id : req.params.id
      }
    }
    )
    res.redirect("/users")
  } catch (error) {
    console.log("error", error)
  }
}
