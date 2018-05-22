var sql = require("msnodesqlv8");

var config =
  "server=A1010;Database=proyecto;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
 new Promise((resolve, reject) => {
      sql.query(config, 'SELECT * FROM dbo.Usuario', function(error, results, fields) {
        if (error) {
          console.log("my error", error);
          var results = {
            error: error
          };
          reject(error);
        } else {
          console.log("Result GET: ", JSON.stringify(results));
          resolve(results);
        }
      });
    });



// const config = {
//     user:"Fernando",
//     password: "952863143",
//     server: "A1010", // You can use 'localhost\\instance' to connect to named instance
//     database: "proyecto",
  
//     options: {
//       encrypt: true // Use this if you're on Windows Azure
//     }
//   };
  
//   sql
//     .connect(config) 
//     .then(pool => {
//       // Query
  
//       return pool.request().query("select * from Usuario");
//     })
//     .then(result => {
//       console.log("conectado");
//       console.log('Usuarios', JSON.stringify(result));
//     })
//     .catch(err => {
//       console.log(err);
//     });
  
