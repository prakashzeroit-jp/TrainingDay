const bcrypt = require("bcryptjs");
const jwt =  require('jsonwebtoken');
const User = require("../models/user");

exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    const hashPassword = await bcrypt.hash(password, 10);
  console.log(username, email, password, hashPassword, "hello jp1----------");
    const newUser = new User({ username:username, email:email, password: hashPassword });
    console.log(username, email, password, hashPassword, newUser, "hello jp2----------");
    await newUser.save();
    res.status(201).json({ message: "user registed successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.login =  async (req,res)=>{
 try{
    const {email,password} =  req.body;
    const user = await User.findOne({email});
    if(!user || !(await bcrypt.compare(password,user.password))){
   return res.status(401).json({message : 'Invalid crediantials!'});
    }
    const token =  jwt.sign({id : user._id},process.env.JWT_SECRET,{expiresIn : '1d'});
    res.json({token,message : 'login  successfull!'});

 }catch(error){
    res.status(500).json({message : error.message});
 }


}