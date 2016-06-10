var http = require('http');

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
  member_session_data = rows;
}); 
});

function onRequest(request, response) {
	console.log("A user made a request" + request.url);
	response.writeHead(200, {"Context-Type": "test/plain"});
	response.write("Check your console!");
	console.log(member_session_data);
	response.end();
}

http.createServer(onRequest).listen(8888);
console.log("Server is running...");