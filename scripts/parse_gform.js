const https = require('https');

function fetchFollow(url) {
  https.get(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept-Language': 'es-419,es;q=0.9,en;q=0.8'
    }
  }, res => {
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      console.log('Redirecting to:', res.headers.location);
      return fetchFollow(res.headers.location);
    }
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const match = data.match(/FB_PUBLIC_LOAD_DATA_\s*=\s*(.*?);\s*<\/script>/s);
      if (match) {
        const formData = JSON.parse(match[1]);
        console.log('FORM TITLE:', formData[1][8]);
        console.log('DESCRIPTION:', formData[1][0]);
        console.log('\n--- QUESTIONS ---');
        const questions = formData[1][1];
        if (questions) {
          questions.forEach((q, idx) => {
            const label = q[1];
            const help = q[2];
            const entryId = q[4] && q[4][0] ? q[4][0][0] : '';
            const required = q[4] && q[4][0] && q[4][0][2] ? true : false;
            const options = q[4] && q[4][0] && q[4][0][1] ? q[4][0][1].map(o => o[0]) : null;
            console.log(`Q${idx+1}: [${entryId}] ${label} ${required ? '(Obligatorio)' : ''}`);
            if (help) console.log(`   Ayuda: ${help}`);
            if (options) console.log(`   Opciones: ${options.join(' | ')}`);
          });
        }
      } else {
        console.log('Status:', res.statusCode, 'Data length:', data.length);
      }
    });
  });
}

fetchFollow('https://docs.google.com/forms/d/e/1FAIpQLSdPgwn26hd2GnwbqHRa4XSTo6AuhMkm5TM7kjSaR13ApaRALA/viewform');
