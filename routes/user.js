const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
const bcrypt = require("bcrypt");
const user = require("../models/user");
const jwt = require("jsonwebtoken");
const isAuth = require("../middelware/passport");
const {
  loginRules,
  registerRules,
  validation,
} = require("../middelware/validator");
// router.get("/", (req, res) => {
//   res.send("hello word");
// });

//register
router.post("/register", registerRules(), validation, async (req, res) => {
  const { name, lastName, email, password, adresse } = req.body;
  try {
    const newUser = new user({ name, lastName, email, password, adresse });

    // check if the email exist
    const searchedUser = await user.findOne({ email });
    if (searchedUser) {
      return res.status(400).send({ msg: "email already exist" });
    }

    //hash password
    const salt = 10;
    const genSalt = await bcrypt.genSalt(salt);
    const hashedPasswords = await bcrypt.hash(password, genSalt);
    console.log(hashedPasswords);
    newUser.password = hashedPasswords;

    //generate a token

    // save the user
    const newUserToken = await newUser.save();
    const payload = {
      _id: newUserToken._id,
      name: newUserToken.name,
    };

    const token = await jwt.sign(payload, process.env.SecrtOrkey, {
      expiresIn: 10000,
    });
    res
      .status(200)
      .send({ newUserToken, msg: "user is saved", token: `Bearer ${token}` });
  } catch (error) {
    res.status(500).send("can not save the user");
    console.log(error);
  }
});

//login
router.post("/login", loginRules(), validation, async (req, res) => {
  const { email, password } = req.body;
  try {
    // find if the user exist
    const searchedUser = await user.findOne({ email });
    // if the email not exist
    if (!searchedUser) {
      return res.status(400).send({ msg: "bad creadential" });
    }
    //password are equals
    const match = await bcrypt.compare(password, searchedUser.password);
    if (!match) {
      return res.status(400).send({ msg: "bad creadential" });
    }
    //cree un token
    const payload = {
      _id: searchedUser._id,
      name: searchedUser.name,
    };
    const token = await jwt.sign(payload, process.env.SecrtOrkey, {
      expiresIn: 10000,
    });
    console.log(token);
    //send the user
    res
      .status(200)
      .send({ user: searchedUser, msg: "success", token: `Bearer ${token}` });
  } catch (error) {
    res.status(500).send({ msg: "can not get the user" });
  }
});

router.get("/current", isAuth(), (req, res) => {
  try {
    res.status(200).send({ user: req.user });
    console.log(req.user);
  } catch (error) {
    console.log(error);
  }
});
router.get("/getusers",async(req,res)=>{
  try {
    let result=await user.find()
    res.send({user:result,msg:"all users"})
  } catch (error){
    console.log(error)
    
  }
})
router.put('/:id', async (req, res) => {
  try {
    let result = await user.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      { $set: { ...req.body } }
    )
    res.send({ result, msg: ' one user' })
  } catch (error) {
    console.log(error)
    res.send({ msg: 'fail' })
  }
})
router.delete('/:id', async (req, res) => {
  try {
    let result = await user.findOneAndRemove({
      _id: req.params.id,
    })
    res.send({ msg: ' delete ' })
  } catch (error) {
    console.log(error)
    res.send({ msg: 'fail' })
  }
})
router.post('/add', async (req, res) => {
  try {
    
      const newuser=new user(req.body);
      await newuser.save();
      res.send({msg:"add"})
    }
   
  catch (error) {
    console.log(error)
    res.send({msg:"fail"})
}})

module.exports = router;
