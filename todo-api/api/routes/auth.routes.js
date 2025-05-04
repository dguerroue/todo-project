// routes/auth.js
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

// Générer un token JWT
const generateToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

// Inscription
router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'Email déjà utilisé' });

    const user = await User.create({ email, password });
    res.status(201).json({ token: generateToken(user), user: { id: user._id, email: user.email } });
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Connexion
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    console.log(user);
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: 'Email ou mot de passe invalide' });
    }
    res.json({ token: generateToken(user), user: { id: user._id, email: user.email } });
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

module.exports = router;