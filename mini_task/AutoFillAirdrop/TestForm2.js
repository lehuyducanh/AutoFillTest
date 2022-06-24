const puppeteer = require('puppeteer');
const fs = require('fs');
const delay = require("delay");
const axios = require('axios');


var wallet = fs.readFileSync('wallet_retro.txt').toString().split("\r\n");



(async () => {

  for (let i = 0; i < 1; i++) {


  const browser = await puppeteer.launch({
    headless: false,
        
    // defaultViewport: { width: 1800, height: 1000, isLandscape: true },
    args: [
      '--incognito', 
      '--aggressive-cache-discard',
      // '--user-data-dir=D:\\Code\\BotMarket\\profileVIP1',
      // `--proxy-server=${proxy}`,
    // //   '--no-sandbox',
    // //   '--disable-setuid-sandbox',
    // //   '--disable-dev-shm-usage',
    // //   '--disable-accelerated-2d-canvas',
    // //   '--no-first-run',
    // //   '--no-zygote',
    // //   '--disable-gpu'
  ]
  });


  const context  = await browser.createIncognitoBrowserContext();


  const page = await context.newPage();
 

 /////// Enter Form 4 Learn and earn at imToken - WOOFi

 await page.goto('https://jinshuju.net/f/Pi1S7m');

 await delay(1000 * 4);


 // Click Start button
 await page.click('body > div.entry-container-inner > div > div.text-center > a');

 await delay(1000 * 4);

 // Answer Q1 WOOFi

 await page.evaluate(() => {
   Array.from(document.querySelectorAll("span"))
   .filter((span) => { return span.innerText === "WOOFi"})[0].click();
 });

 // Answer Q2 Farm

 const [element42] = await page.$x('//span[contains(text(), "Farm")]');
 await element42.click();
 await delay(500 * 1);

 // Answer Q3 Solana
 const [element43] = await page.$x('//span[contains(text(), "Solana")]');
 await element43.click();
 await delay(500 * 1);

 // Answer Q4 7 days
 const [element44] = await page.$x('//span[contains(text(), "7 days")]');
 await element44.click();
 await delay(500 * 1);

 // Answer Q5 sPMM
 const [element45] = await page.$x('//span[contains(text(), "sPMM")]');
 await element45.click();
 await delay(500 * 1);

 // Answer Q6 All the above are OK
 const [element46] = await page.$x('//span[contains(text(), "All the above are OK")]');
 await element46.click();
 await delay(500 * 1);

 // Answer Q7 300 thousands
 const [element47] = await page.$x('//span[contains(text(), "300 thousands")]');
 await element47.click();
 await delay(500 * 1);

   // Answer Q8 All of the above

await page.click('#root > div > form > div.published-form__body > div.ant-row.fields > div:nth-child(16) > div > div > div.ant-col.ant-form-item-control > div.ant-form-item-control-input > div > span > div > div:nth-child(4) > div > div > label > span:nth-child(2) > span')
await page.click('#root > div > form > div.published-form__body > div.ant-row.fields > div:nth-child(18) > div > div > div.ant-col.ant-form-item-control > div.ant-form-item-control-input > div > span > div > div:nth-child(4) > div > div > label > span:nth-child(2) > span')
   
 // Answer Q7 0.025%
 const [element48] = await page.$x('//span[contains(text(), "0.025%")]');
 await element48.click();
 await delay(500 * 1);



 // Answer Q10 Fill Wallet
 await page.type('#root > div > form > div.published-form__body > div.ant-row.fields > div:nth-child(22) > div > div > div.ant-col.ant-form-item-control > div.ant-form-item-control-input > div > span > span > input', wallet, { delay: 10 })

 await delay(500 * 1);


// Screenshot
await page.screenshot({ path: `${i}1.png` });

// context.close()
// browser.close()
};


})

();
