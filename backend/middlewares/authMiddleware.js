const jwt = require('jsonwebtoken');
const User = require('../models/User');


// Middleware to protect routes
const protect = async (req, res, next) => {
    try {
        let token;

        // Check if token is in headers
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
        }

        // If no token, return unauthorized
        if (!token) {
            return res.status(401).json({ message: 'Not authorized, no token' });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Get user from the token
        req.user = await User.findById(decoded.id).select('-password');
        
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: 'Not authorized, token failed' });
    }
}

//middleware fo admin access
const adminOnly = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next(); // User is admin, proceed to the next middleware or route handler
    } else {
        res.status(403).json({ message: 'Access denied, admin only' }); // Forbidden access
    }
}

module.exports = { protect, adminOnly };