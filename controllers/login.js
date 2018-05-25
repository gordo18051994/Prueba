exports.login = function(req, res) {
    var email = req.body.email;
  var password = req.body.password;
  var query =
    "SELECT * FROM Usuario WHERE Email ='" +
    email +
    "'  AND Contraseña ='" +
    password +
    "'";

  sql.query(config, query, function(error, results, fields) {
    if (email === results[0].Email &&
      password === results[0].Contraseña) {
        req.session.useremail = req.body.email;
      // req.session.userId = results[0].id;
      // req.session.user = results[0];
      console.log(req.session.useremail)
      console.log("Result Login: ", JSON.stringify(results[0].Email));
      console.log(results[0].Nombre); 
      console.log(results[0].id);
      res.render('index')
    } else {
      var results = {
        error: error
      };
      console.log(results.error);
    }
  });
};
