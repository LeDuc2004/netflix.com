const { findById } = require("../models/Account.model");




module.exports.isAuthen = async (req, res, next) => {
    
    let {userId} = req.session;


    if (userId) {
        
        let result = await findById(userId);
        let [find] = result[0];
        if (find) {
            next();
        } else {
            res.redirect("/dangnhap")
        }
    } else {
        res.redirect("/dangnhap")
    }

}