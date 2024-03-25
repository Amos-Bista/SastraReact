// authRouter.js

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const Admin = require('./adminModel');

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    try {
        // Find admin by email
        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        // Compare passwords
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        res.json({ message: 'Sign-in successful' });
    } catch (err) {
        console.error('Error signing in:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
