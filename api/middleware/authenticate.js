const jwt = require('jsonwebtoken');
const authenticate = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, 'SECRET');
        //console.log(token);
        req.userData = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            message: "Auth failed"
        });
    }
}

module.exports =authenticate;



// multer->work with image or any other file