const listUsersService = require('../services/listUsersService')

const listUsersController = {

    handle: async (req, res) => {

        const users = await listUsersService.execute()

        return res.json(users)
    }
}

module.exports = listUsersController
