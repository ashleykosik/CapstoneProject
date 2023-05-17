require('dotenv').config
const {CONNECTION_STRING} = process.env
const Sequelize = require('sequelize')


module.exports = {
    getUserInfo: (req, res) => {
        Sequelize.query(`select * from users`)
    },
    updateUserInfo: (req, res) => {
        let {
            username,
            firstName,
        } =  req.body

        // sequelize.query(`update users set first_name = '${firstName}', 
        // where user_id = ${user_id}`


    }
}