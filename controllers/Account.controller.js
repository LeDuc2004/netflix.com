const express = require("express");
const {addUser , getUser , findByProperty , upLoad ,getMovie} = require("../models/Account.model") 
const bcrypt = require('bcryptjs');
const app = express();
app.set("view engine", "ejs"); 



module.exports.getMoviecc = async (req, res) => {
  try {
    await getMovie()
      .then((data) => {
        let [cc] = data;
        res.status(200).send(cc);
      })
      .catch((err) => {
        res.status(500).json({
          err: err.message,
        });
      });
  } catch (error) {
    console.log(error);
  }
};
module.exports.getUsercc = async (req, res) => {
    try {
      await getUser()
        .then((data) => {
          let [cc] = data;
          res.status(200).send(cc);
        })
        .catch((err) => {
          res.status(500).json({
            err: err.message,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
module.exports.addUsercc = async (req, res) => {

  
    try {
      await addUser(req.body[0])
        .then((data) => {
          let [cc] = data;
          res.status(200).send(cc);
        })
        .catch((err) => {
          res.status(500).json({
            err: err.message,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
  module.exports.dnUsercc = async (req, res) => {
    
    let { email, password } = req.body;
    try {
        let result = await findByProperty("email", email)
        let [find] = result[0];
        
        if (!find) {
            res.json({
                message: "user not found"
            })
            
        } else { 
          
            let hash = find.password;
            let pass = bcrypt.compareSync(password, hash)
            if (pass) {
              
             

                 req.session.userId = find.id_user
                //  console.log(req.session.userId);
                
                res.json({
                  status: `${find.email}`
                  
                }) 

            } else {
                res.json({
                    message: " password is not correct"
                })
            }
        }
    } catch (error) {
        console.log(error);
    }
  };
  module.exports.addUsercc = async (req, res) => {

  
    try {
      await addUser(req.body[0])
        .then((data) => {
          let [cc] = data;
          res.status(200).send(cc);
        })
        .catch((err) => {
          res.status(500).json({
            err: err.message,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
  module.exports.upload = async (req, res) => {

  
    try {
      await upLoad(req.body[0])
        .then((data) => {
          let [cc] = data;
          res.status(200).send(cc);
        })
        .catch((err) => {
          res.status(500).json({
            err: err.message,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };