const os = require("os");

//infor about current user

const user = os.userInfo();

// method returnsthe system uptime in seconds

console.log(`The System uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS)