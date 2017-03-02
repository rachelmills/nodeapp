var os = require('os');  // bring in os module and assign to os

var message = 'Here is some info about your system';

var sysarray = new Array('Type: ' + os.type(),
													'Node Version: ' + process.version,   // process is a global object
													'Platform: ' + os.platform(),
													'Hostname: ' + os.hostname(),
													'Total Memory: ' + os.totalmem(),
													'Free Memory: ' + os.freemem(),
													'Uptime: ' + os.uptime()													
													);
													
console.log(message);
var arraylen = sysarray.length;
i = 0;
while(i < arraylen) {
	console.log(sysarray[i]);
	i++
}