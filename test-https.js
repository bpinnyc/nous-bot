const https = require('https');

const options = {
  hostname: 'inference-api.nousresearch.com',  // ✅ the correct hostname
  port: 443,
  path: '/v1/chat/completions',                // ✅ a real path (even if you get 400 later)
  method: 'GET'                                // GET is fine for a quick test
};

const req = https.request(options, res => {
  console.log(`✅ Status Code: ${res.statusCode}`);
  res.on('data', d => {
    process.stdout.write(d);
  });
});

req.on('error', error => {
  console.error('❌ Connection error:', error);
});

req.end();
