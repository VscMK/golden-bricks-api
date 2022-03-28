  const jwt = require('jsonwebtoken');

  function jwtTokens({ id, first_name, email }) {
      const User = { id, first_name, email };
      // set expiration time?
      const accessToken = jwt.sign(User, process.env.JWT_KEY);
      return ({
          message: "Auth successful",
          accessToken
      });
  }

  module.exports = { jwtTokens };