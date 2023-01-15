const db = require("../utils/database")
const bcrypt = require('bcryptjs');
const mysql = require("mysql2")
module.exports.getUser = ()=>{
    return db.execute(`SELECT * FROM auth.tbl_user ;`)
}
module.exports.getMovie = ()=>{
    return db.execute(`SELECT * FROM auth.movie ;`)
}

module.exports.addUser = (data)=>{
    let user_id = Math.floor(Math.random() * 1000000)
    let salt = bcrypt.genSaltSync(11);
    let hash = bcrypt.hashSync( data.password , salt);
    return db.execute(
        ` INSERT INTO auth.tbl_user ( id_user ,email , password )
         VALUES ( ? , ? , ? ) ; `,
        [ user_id , data.email , hash  ]
      ) 
}
module.exports.upLoad = (data)=>{

    return db.execute(
        ` INSERT INTO auth.movie ( id ,name , img , url )
         VALUES ( ? , ? , ? , ?) ; `,
        [ data.id , data.name , data.img  ,data.url]
      ) 
}
module.exports.findByProperty = (key, value) => {
    let sql = "select * from ?? where ?? = ?"
    let inserts = [`tbl_user`, key, value];
    sql = mysql.format(sql, inserts);
    return db.execute(sql);
}

module.exports.findById = (id)=>{
    let sql = "select * from tbl_user where id_user = ?";
    return db.execute(sql,[id]);
}
