const express = require('express');
const responseHandler = require('../middlewares/response-handler');
const validationResult = require('../middlewares/validation-result');
const upload = require('../middlewares/upload');
const{ body } = require('express-validator');
const AuthCtrl = require('../controllers/auth.ctrl');
const router = express.Router();


router.route('/login').post(
    body('username').exists(),
    body('password').exists(),
    responseHandler,
    validationResult,
   async (req,res)=>{
       try {
           const token = await AuthCtrl.login({
               ...req.body
           });
           res.onSuccess(token)
       }catch (e) {
           res.onError(e)
       }
});

router.post(
    '/register',
    body('name').exists().isLength({min: 6}),
    body('password').exists().isLength({min: 6}).custom(value => {
        return new RegExp("^[A-Z0-9.,/ $@()]+$").test(value);
    }),
    responseHandler,
    validationResult,
    async (req, res) => {
        try {
            let userData = await AuthCtrl.register({
                email: req.body.email,
                name: req.body.name,
                lastName: req.body.lastName,
                username: req.body.username,
                password: req.body.password
            });
            userData = userData.toObject();
            delete userData.password;
            res.onSuccess(userData)
        } catch (e) {
            res.onError(e)
        }
    });


module.exports = router;