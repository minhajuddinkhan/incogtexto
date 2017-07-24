const interfaces = require('os').networkInterfaces()["eth0"];
const QrCode = require('qrcode');
const app = require('express')();
const network = require('network');

const ipv4 = interfaces.find((interface) => interface.family === 'IPv4');
const ipv4str = JSON.stringify(ipv4);


network.get_interfaces_list(function(err, list) {
  console.log(list)
})

app.get('/', (req, res) => {
  QrCode.toDataURL(ipv4str, (err, url) =>  {
    res.send(`<img src="${url}" />`);
  });

});

app.listen(3000);
