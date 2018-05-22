var express = require("express");
var api = express.Router();
var sql = require("msnodesqlv8");
var config =
  "server=A1010;Database=proyecto;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
  var localStorage = require("localStorage");

/* GET users listing. */
function verificarSignin(req, res, next) {
  debugger;
  if (req.session.useremail && !req.session.useremail !== "") {
    next();
  } else res.redirect("/login");
}
/* GET home page. */
api.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

api.get("/login", function(req, res, next) {
  res.render("login", {});
});

api.get("/Signup", function(req, res, next) {
  res.render("registro", {});
});

api.post("/Signup", function(req, res, next) {
  var form = {
    nombre: req.body.nombre,
    apellido1: req.body.apellido1,
    apellido2: req.body.apellido2,
    telefono: req.body.telefono,
    DNI: req.body.DNI,
    direccion: req.body.direccion,
    email: req.body.email,
    password: req.body.password,
    provincia: req.body.provincia,
    localidad: req.body.localidad
  };
  var query = `INSERT INTO dbo.Usuario (Nombre, Apellido1, Apellido2, DNI, Direccion, Email, Contraseña, Provincia, Localidad, Telefono)
  VALUES('${form.nombre}', '${form.apellido1}', '${form.apellido2}', '${
    form.DNI
  }', '${form.direccion}', '${form.email}', '${form.password}', '${
    form.provincia
  }', '${form.localidad}', '${form.telefono}')`;

  sql.query(config, query, function(error, results, fields) {
    if (error) {
      console.log(error);
      var dato = Object.assign({}, req.body, {
        error: "Credenciales incorrectas"
      });
      res.redirect("/Signup", dato);
    } else {
      var results = {
        error: null,
        nombre: form.nombre,
        apellido1: form.apellido1,
        apellido2: form.apellido2,
        telefono: form.telefono,
        DNI: form.DNI,
        direccion: form.direccion,
        email: form.email,
        password: form.password,
        provincia: form.provincia,
        localidad: form.localidad
      };
      req.session.useremail = results.email;
      console.log(req.session.useremail);
      req.session.user = results.nombre;
      console.log("Result POST: ", results.email);
      res.redirect("/securepage");
    }
  });
});

api.post("/login", function(req, res, next) {
  var email = req.body.email;
  var password = req.body.password;
  var query =
    "SELECT * FROM Usuario WHERE Email ='" +
    email +
    "'  AND Contraseña ='" +
    password +
    "'";

  sql.query(config, query, function(error, results, fields) {
    if (error) {
      console.log("my error", error);
      var results = {
        error: error
      };
      return results;
    } else if (
      email === results[0].Email &&
      password === results[0].Contraseña
    ) {
      req.session.useremail = req.body.email;
      // req.session.userId = results[0].id;
      // req.session.user = results[0];
      console.log(req.session.useremail)
      console.log("Result Login: ", JSON.stringify(results[0].Email));
      console.log(results[0].Nombre); 
      localStorage.setItem('Nombre', JSON.stringify(results[0].Nombre));
      console.log("Local Storage", localStorage.Nombre )
      console.log(results[0].id);
      res.redirect("/securepage");
    } else {
      var dato = Object.assign({}, req.body, {
        error: "Credenciales incorrectas"
      });
      res.render("login", dato);
    }
  });
});

api.get("/securepage", verificarSignin, function(req, res, next) {
  res.render("secure", {});
});

api.get("/Logout", function(req, res, next) {
  req.session.destroy(function(err) {});
  res.render("index", {});
});

module.exports = api;
