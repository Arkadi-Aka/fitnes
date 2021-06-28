const User = require('../models/users');
const Bcrypt = require('../managers/bcrypt');

class UsersCtrl {

    async findOne(options){
        const userData = User.findOne(options);
        return userData
    }

    async add(data){
        if (await User.findOne({username: data.username})) {
            throw new Error('User exists');
        } else {
            const user = new User({
                email: data.email,
                name: data.name,
                password: await Bcrypt.hash(data.password),
            });
            user.username = data.username;
            user.lastName = data.lastName;

            return  user.save();


        }
    }
}

module.exports = new UsersCtrl();