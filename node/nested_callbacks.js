var sql = require('mssql');

var config = {              
    user: 'socalsafeinterview',             
    password: 'interv!3w',              
    server: 'mimobackoffice.cevu6a2ct9qj.us-west-1.rds.amazonaws.com',              
    port: 4443,             
    database: 'BODB'                
}


sql.connect(config).then(function() {
   new sql.Request().query('select * from MemberSession', function(err,rows){
  if(err) throw err;

  // console.log('Data received from Db:\n');
  console.log(rows);
}); 
});

