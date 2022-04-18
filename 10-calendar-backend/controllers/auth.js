const { response } = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/UserMDL');
const { generateJWT } = require('../helpers/jwt');

const createUser = async(req, res = response) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({email});
    if(user) {
      return res.status(400).json({
        ok: false,
        msg: 'Ese correo ya existe',
      });
    }

    //Encrypt password
    user = new User(req.body);
    user.password = bcrypt.hashSync(password, 12);

    await user.save();

    //Generate JWT
    const token = await generateJWT(user.id, user.name);
    res.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name,
      token,
    });

  } 
  catch(error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Contacte al administrador',
    });
  }
}

const loginUser = async(req, res = response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({email});
    if(!user) {
      return res.status(400).json({
        ok: false,
        msg: 'Credenciales invalidas',
      });
    }

    const validatePassword = bcrypt.compareSync(password, user.password);

    if(!validatePassword) {
      return res.status(400).json({
        ok: false,
        msg: 'Credenciales invalidas',
      });
    }

    //Generate JWT
    const token = await generateJWT(user.id, user.name);
    res.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name,
      token,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Contacte al administrador',
    });
  }
}

const revalidateToken = async(req, res = response) => {
  const { uid, name } = req;
  const token = await generateJWT(uid, name);

  res.json({
    ok: true,
    uid,
    name,
    token,
  });
}

module.exports = {
  createUser,
  loginUser,
  revalidateToken
}