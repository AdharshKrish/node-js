const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
    width: 1500,
    height: 4800,
    deviceScaleFactor: 1,
  });
  await page.goto('https://adharshkrish.github.io/pec.edu/home',{timeout:0,waitUntil:"networkidle0"});
  // await page.goto('http://www.peciis.info/PECMIS');
  await page.screenshot({path: 'new-pec.png'});
  // await page.screenshot({path: 'iis.png'});

  await browser.close();
})();