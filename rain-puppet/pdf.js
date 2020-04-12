const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://peciis.info/PECMIS', {waitUntil: 'networkidle2'});
  await page.emulateMedia('screen');
  await page.pdf({path: 'pec.pdf', format: 'A4'});

  await browser.close();
})();