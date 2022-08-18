const Users = require('../model/User');

const updateUsers= async (req, res) => {
    if (!req?.body?.username) {
        return res.status(400).json({ 'message': 'username parameter is required.' });
    }

    const user = await Users.findOne({username: req.body.username }).exec();
    if (!user) {
        return res.status(204).json({ "message": `No user matches username ${req.body.username}.` });
    }
    user.roles =req.body.roles;
    const result = await user.save();
    res.json(result);
}



module.exports ={updateUsers}