const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, process.env.SECRET, (err) => {
            if (err) return res.sendStatus(403);
            next();
        });
    } else {
        res.sendStatus(401);
    }
}

const adminAccess = (req, res, next) => {
    if (req.user && req.user.admin) {
        return next();
    } else {
        return res.json({ message: "Unauthorized." })
    }
}

module.exports = {
    verifyToken,
    adminAccess
}

