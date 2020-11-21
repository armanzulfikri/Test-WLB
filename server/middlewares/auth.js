const { tokenVerifier } = require("../helpers/jwt");

exports.Authentication = (ctx, next) => {
  const token = ctx.headers.token;
  if (!token) {
    ctx.status = 400;
    ctx.body = {message: "Token is not found"}
  } else {
    try {
      const decoded = tokenVerifier(token);

      ctx.userData = decoded;
      // next();
    } catch (err) {
      ctx.status = 400;
    }
  }
};