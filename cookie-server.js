const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 10000;
const USERS = { admin: 'admin' };

// variables
const DOMAIN = 'demo.local' // Will work
// const DOMAIN = 'api.demo.local' // Won't work
// const DOMAIN = 'app.demo.local' // Won't work
// const DOMAIN = undefined // Will work if the frontend and backend are on the same domain
// const SAME_SITE = 'strict'
const SAME_SITE = 'lax'
// const SAME_SITE = 'none'

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: true, credentials: true }));

const profile = {
    username: 'admin',
    email: 'admin@example.com',
    role: 'Admin',
}

// Login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (USERS[username] && USERS[username] === password) {
        res.cookie('session', 'secureRandomToken', {
            httpOnly: true,
            secure: false, // Set to true if using HTTPS
            sameSite: SAME_SITE,
            path: '/',
            domain: DOMAIN
        });
        return res.json({ message: 'Logged in successfully' });
    }
    res.status(401).json({ error: 'Invalid credentials' });
});

// Logout endpoint
app.post('/logout', (req, res) => {
    res.clearCookie('session', { path: '/', domain: DOMAIN });
    res.json({ message: 'Logged out successfully' });
});

// Profile endpoint
app.get('/profile', (req, res) => {
    if (req.cookies.session === 'secureRandomToken') {
        return res.json(profile);
    }
    res.status(403).json({ error: 'Unauthorized' });
});

app.post('/profile', (req, res) => {
    if (req.cookies.session !== 'secureRandomToken') {
        return res.status(403).json({ error: 'Unauthorized' });
    }

    res.status(201).json(profile);
});

app.put('/profile', (req, res) => {
    if (req.cookies.session !== 'secureRandomToken') {
        return res.status(403).json({ error: 'Unauthorized' });
    }

    res.status(200).json(profile);
});

app.delete('/profile', (req, res) => {
    if (req.cookies.session !== 'secureRandomToken') {
        return res.status(403).json({ error: 'Unauthorized' });
    }

    res.status(200).json(profile);
});

app.listen(PORT, () => {
    console.log(`Server running at http://api.demo.local:${PORT}`);
});