  const jwt = require('jsonwebtoken');

  function jwtTokens({ id, first_name, last_name, email, role_id, team_id }) {
      const User = { id, first_name, last_name, email, role_id, team_id };
      // set expiration time?
      const accessToken = jwt.sign(User, process.env.JWT_KEY);
      return ({
          message: "Auth successful",
          accessToken,
          User
      });
  }

  module.exports = { jwtTokens };