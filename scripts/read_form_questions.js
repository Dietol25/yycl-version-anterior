const https = require('https');

https.get('https://docs.google.com/forms/d/e/1FAIpQLSdPgwn26hd2GnwbqHRa4XSTo6AuhMkm5TM7kjSaR13ApaRALA/viewform', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'Accept-Language': 'es,es-419;q=0.9,en;q=0.8'
  }
}, res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Search for question entries
    const regex = /data-params="%.@.([^,]+),&quot;([^&]+)&quot;/g;
    let match;
    let found = 0;
    while ((match = regex.exec(data)) !== null) {
      console.log(`Q: ${match[2]}`);
      found++;
    }
    if (found === 0) {
      console.log('No data-params matched. Total length:', data.length);
      // Let's dump all text inside divs with class or aria-label
      const ariaMatches = data.match(/aria-label="([^"]+)"/g);
      if (ariaMatches) {
        console.log('Aria labels found:', ariaMatches.slice(0, 15));
      }
    }
  });
}).on('error', e => console.error(e));
