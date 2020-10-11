exports.authUser = (req, res) => {
  console.log("Load User Called");
};

exports.signup = (req, res) => {
  console.log("Register User Called")
};

exports.login = (req, res) => {
  console.log('Login User Called');
};

exports.logout = () => {
  console.log('User Logout Called');
};
