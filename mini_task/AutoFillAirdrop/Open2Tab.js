const puppeteer = require('puppeteer');
const fs = require('fs');
const delay = require("delay");

var wallet = fs.readFileSync('wallet_retro.txt').toString().split("\r\n");




(async () => {

  for (let i = 0; i < 2; i++) {

  const browser = await puppeteer.launch({
    headless: false,
        
    // defaultViewport: { width: 1800, height: 1000, isLandscape: true },
    args: [
      '--incognito', 
      '--aggressive-cache-discard',
      // '--user-data-dir=D:\\Code\\BotMarket\\profileVIP1',
      // '--proxy-server=115.73.141.143:36133'
    // //   '--no-sandbox',
    // //   '--disable-setuid-sandbox',
    // //   '--disable-dev-shm-usage',
    // //   '--disable-accelerated-2d-canvas',
    // //   '--no-first-run',
    // //   '--no-zygote',
    // //   '--disable-gpu'
  ]
  });


  // const context  = await browser.createIncognitoBrowserContext();


  const page = await browser.newPage();
  await page.goto('https://jinshuju.net/f/mnQf1E');

  await delay(1000*5);

  await page.goto('https://jinshuju.net/f/bAXOlN');

  await delay(1000*5);

  await page.goto('https://jinshuju.net/f/z5lTRW');

  await delay(1000*5);

  await page.goto('https://jinshuju.net/f/amMcCP');

  await delay(1000*5);

  
await page.screenshot({ path: `${i}4.png` });



browser.close()

};


})

();
