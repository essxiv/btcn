var jwt = require('jwt-simple');
var validateUser = require('../routes/security/register');

module.exports = function(req, res, next) {
    var token = (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers['x-access-token'];
    var key = (req.body && req.body.x_key) || (req.query && req.query.x_key) || req.headers['x-key'];

    if (token || key) {

        console.log('token: ', token);
        console.log('key: ', key);
        
        try {

            // import the decoded jwt token script
            var decoded = jwt.decode(token, require('../routes/security/secret')());

            // validate the user with the key
            var dbUser = validateUser(key);

            if (decoded.exp <= Date.now()) {
                res.status(400);
                res.json({
                    status: 400,
                    message: "Token Expired"
                })
                return;
            }

            if (dbUser) {
                if ((req.url.indexOf('admin') >= 0 && dbUser.role === 'admin') || (req.url.indexOf('admin') < 0 && req.url.indexOf('/api/v1/'))) {
                    next();
                } else {
                    res.status(403);
                    res.json({
                        status: 403,
                        message: "Not Authorized"
                    });
                    return;
                }
            } else {
                res.status(401);
                res.json({
                    status: 401,
                    message: "Invalid User"
                });
                return;
            }
        } catch (err) {
            res.status(500);
            res.json({
                status: 500,
                message: "Something Went Wrong",
                error: err
            })
        }
    } else {
        res.status(401);
        res.json({
            status: 401,
            message: "Invalid Token or Key"
        })
        return;
    }
}