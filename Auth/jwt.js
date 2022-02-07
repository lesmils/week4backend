const jwt = require("jsonwebtoken");

const secret = "enfih3847hf4-/3+8873y*e8210&90j9^8u84%h38$47";

function toJWT(data) {
  const new_token = jwt.sign(data, secret, { expiresIn: "2h" });
  return new_token;
}
function toData(token) {
  const stored_data = jwt.verify(token, secret);
  return stored_data;
}

module.exports = { toJWT, toData };
