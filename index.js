var qrcode = require('qrcode-terminal');
var prompt = require('prompt');

prompt.start();

prompt.get(['url'], function (err, result) {
  require('dns').lookup(require('os').hostname(), function (err, add, fam) {
      console.log('You are opening the following URL ' + add + ':3000/' + result.url)
      var newQR;
      newQR = add + ':3000/' + result.url;
    	qrcode.generate(newQR, function (qrcode) {
      	console.log(qrcode);
  	});
  })
});
