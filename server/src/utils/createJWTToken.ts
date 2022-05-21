const jwt = require('jsonwebtoken');
// create json web token
const maxAge = 30 * 24 * 60 * 60;
const JWT_SECRET = 'dsflhkdsbkhbk34889ihjjdsfh489389534y#@$#@$@#jdsfjfjew'

const createToken = (id: any) => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: maxAge
  });
};

export default createToken;