var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'mimobackoffice.cevu6a2ct9qj.us-west-1.rds.amazonaws.com',
	user: 'socalsafeinterview',
	password: 'interv!3w',
	database: 'BODB',
	port: '4443'
}
	);

// connection.connect(function(err) { 
// 	if (err) { 
// 		console.error('error connecting: ' + err.stack); 
// 		return; 
// 	} 
// 	console.log('connected as id ' + connection.threadId); 
// }
// 	);

connection.connect();
console.log('test');
connection.query('SELECT * FROM MemberSession', function(err, result)	{
	console.log(query.sql);
});