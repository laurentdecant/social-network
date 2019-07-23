import jwt from "jsonwebtoken";

const secretKey = process.env.SECRET_KEY;

function createToken(payload) {
  return jwt.sign(payload, secretKey);
}

export { createToken };
