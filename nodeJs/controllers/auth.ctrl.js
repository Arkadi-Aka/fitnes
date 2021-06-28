const TokenManager = require('../managers/token-manager');
const AppError = require('../managers/app-error');
const UserCtrl = require('../controllers/users.ctrl');
const Bcrypt = require('../managers/bcrypt');




class AuthCtrl {
    async login(data) {
        const {username, password} = data;
        const user = await UserCtrl.findOne({username});
        if (!user) {
            throw new AppError("UserName or password is wrong", 403);
        }
        if (await Bcrypt.compare(password, user.password)) {
            return TokenManager.encode({
                userId: user._id
            })
        }
        throw new AppError("UserName or password is wrong", 403);
    }

    async register(data){
        const user = await UserCtrl.add(data);
        const token = TokenManager.encode({
            email: user.email,
            action: "register"
        }, 3600);
        return user;
    }

}

module.exports = new AuthCtrl();