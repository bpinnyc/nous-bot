const https = require('https');

const options = {
  hostname: 'api.nous.ai',
  port: 443,
  path: '/',
  method: 'GET'
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
