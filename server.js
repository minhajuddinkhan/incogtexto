const interfaces = require('os').networkInterfaces()["eth0"];
const QrCode = require('qrcode');
const ipv4 = interfaces.find((interface) => interface.family === 'IPv4');
const ipv4str = JSON.stringify(ipv4);
const app = require('express')();

app.get('/', (req, res) => {
  QrCode.toDataURL(ipv4str, (err, url) =>  {
    res.send(`<img src="${url}" />`);
  });

});

app.listen(3000);