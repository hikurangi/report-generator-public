let os = require('os');
let ifaces = os.networkInterfaces();

const PORT     = 3000
const PROTOCOL = 'http'
let host       = 'localhost'


Object.keys(ifaces).forEach(ifname => {
  let alias = 0;

  ifaces[ifname].forEach(iface => {
    if ('IPv4' !== iface.family || iface.internal !== false) {
      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      return;
    }

    if (alias >= 1) {
      // this single interface has multiple ipv4 addresses
      console.log(ifname + ':' + alias, iface.address);
    } else {
      // this interface has only one ipv4 adress
      host = iface.address
      console.log(ifname, iface.address);
    }
    ++alias;
  });
});

// en0 192.168.1.101
// eth0 10.0.0.101
// NOTE: LOCAL_NETWORK_IP defined in .zshrc
// see https://gist.github.com/hikurangi/85f8d3fa9a2c2c489b41d3fa0506e0a4

// en0 192.168.1.101
// eth0 10.0.0.101

const outputHost = `${PROTOCOL}://${host}:${PORT}`
console.info({outputHost})
module.exports = outputHost