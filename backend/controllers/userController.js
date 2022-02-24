// @desc Regiser new User
// @route Post /api/users
// @access Public
const registerUser = (req, res) => {
    res.json({
        message: 'Register User'
    })
}

// @desc Authenticate a User
// @route Post /api/users/login
// @access Public
const loginUser = (req, res) => {
    res.json({
        message: 'login User'
    })
}

// @desc Get User Data
// @route GET /api/users/me
// @access Public
const getMe = (req, res) => {
    res.json({
        message: 'User Data displayed'
    })
}

module.exports = {
    registerUser,
    loginUser,
    getMe
}