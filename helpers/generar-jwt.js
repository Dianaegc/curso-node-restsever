//IMPORT
const jwt = require("jsonwebtoken");

//FUNCTIONS - de jwt
const generarJWT = (uid = "") => {  // user identifier

  return new Promise((resolve, reject) => {
    const payload = { uid };
    jwt.sign(
      payload,
      process.env.SECRETPRIVATEKEY,
      {
        expiresIn: "10h",
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject("Error generating the  token");
        } else {
          resolve(token);
        }
      }
    );
  });
};

//EXPORT
module.exports = {
  generarJWT,
};
