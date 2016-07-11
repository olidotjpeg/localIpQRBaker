var qrcode = require('qrcode-terminal');
var prompt = require('prompt');

prompt.start();

prompt.get(['url', 'port'], function (err, result) {
  require('dns').lookup(require('os').hostname(), function (err, add, fam) {
      console.log('You are opening the following URL ' + add + ':' + result.port + '/' + result.url)
      var newQR;
      newQR = add + ':' + result.port + '/' + result.url;
    	qrcode.generate(newQR, function (qrcode) {
      	console.log(qrcode);
  	});
  })
});
