const puppeteer = require('puppeteer');
const fs = require('fs');
const delay = require("delay");

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
      '--proxy-server=115.73.141.143:36133'
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
  await page.goto('https://jinshuju.net/f/mnQf1E');

  await delay(1000*10);


  // Click Start button
  await page.click('body > div.entry-container-inner > div > div.text-center > a');

await delay(1000*10);

// Answer Q1 (Fixed Place)
await page.click('#root > div > form > div.published-form__body > div.ant-row.fields > div:nth-child(2) > div > div > div.ant-col.ant-form-item-control > div.ant-form-item-control-input > div > span > div > div:nth-child(4) > div > div > label > span:nth-child(2) > span');
await delay(1000*1);

// Answer Q2 ZKSync Dynamic

const [element12] = await page.$x('//span[contains(text(), "zkSync")]');
await element12.click();
await delay(1000*1);

// Answer Q3 Socket
const [element13] = await page.$x('//span[contains(text(), "Socket")]');
await element13.click();
await delay(1000*1);

// Answer Q4 The protocol aggregates multiple bridges
const [element14] = await page.$x('//span[contains(text(), "The protocol aggregates multiple bridges")]');
await element14.click();
await delay(1000*1);

// Answer Q5 The website lets you bridge and swap a token via the cheapest bridge in one click
const [element15] = await page.$x('//span[contains(text(), "The website lets you bridge and swap a token via the cheapest bridge in one click")]');
await element15.click();
await delay(1000*1);

// Answer Q6 Fill Wallet
await page.type('#root > div > form > div.published-form__body > div.ant-row.fields > div:nth-child(12) > div > div > div.ant-col.ant-form-item-control > div.ant-form-item-control-input > div > span > span > input', wallet[i], { delay: 10 })

await delay(1000*1);

// Click Final Submit
await page.click('#root > div > form > div.published-form__footer > div > button');
await delay(1000*10);


// Screenshot
await page.screenshot({ path: `${i}1.png` });

/////// Enter Form 2

await page.goto('https://jinshuju.net/f/bAXOlN');

await delay(1000*10);


// Click Start button
await page.click('body > div.entry-container-inner > div > div.text-center > a');

await delay(1000*10);

// Answer Q1 NFT to Layer 2

const [element21] = await page.$x('//span[contains(text(), "NFT to Layer 2")]');
await element21.click();
await delay(1000*1);

// Answer Q2 Optimism

const [element22] = await page.$x('//span[contains(text(), "Optimism")]');
await element22.click();
await delay(1000*1);

// Answer Q3 December 2021
const [element23] = await page.$x('//span[contains(text(), "December 2021")]');
await element23.click();
await delay(1000*1);

// Answer Q4 More than 50 Collection
const [element24] = await page.$x('//span[contains(text(), "More than 50 collections")]');
await element24.click();
await delay(1000*1);

// Answer Q6 Fill Wallet
await page.type('#root > div > form > div.published-form__body > div.ant-row.fields > div:nth-child(12) > div > div > div.ant-col.ant-form-item-control > div.ant-form-item-control-input > div > span > span > input', wallet[i], { delay: 10 })

await delay(1000*1);

// Click Final Submit
await page.click('#root > div > form > div.published-form__footer > div > button');
await delay(1000*10);


// Screenshot
await page.screenshot({ path: `${i}2.png` });

/////// Enter Form 3

await page.goto('https://jinshuju.net/f/z5lTRW');

await delay(1000*10);


// Click Start button
await page.click('body > div.entry-container-inner > div > div.text-center > a');

await delay(1000*10);

// Answer Q1 Decentralized exchange

const [element31] = await page.$x('//span[contains(text(), "Decentralized exchange")]');
await element31.click();
await delay(1000*1);

// Answer Q2 zkSync

const [element32] = await page.$x('//span[contains(text(), "zkSync")]');
await element32.click();
await delay(1000*1);

// Answer Q3 Trade perpetuals with leverage
const [element33] = await page.$x('//span[contains(text(), "Trade perpetuals with leverage")]');
await element33.click();
await delay(1000*1);

// Answer Q4 No. All tokens available on zkSync are also available on ZigZag
const [element34] = await page.$x('//span[contains(text(), "No. All tokens available on zkSync are also available on ZigZag")]');
await element34.click();
await delay(1000*1);

// Answer Q6 Fill Wallet
await page.type('#root > div > form > div.published-form__body > div.ant-row.fields > div:nth-child(12) > div > div > div.ant-col.ant-form-item-control > div.ant-form-item-control-input > div > span > span > input', wallet[i], { delay: 10 })

await delay(1000*1);

// Click Final Submit
await page.click('#root > div > form > div.published-form__footer > div > button');
await delay(1000*10);


// Screenshot
await page.screenshot({ path: `${i}3.png` });

/////// Enter Form 4

await page.goto('https://jinshuju.net/f/amMcCP');

await delay(1000*10);


// Click Start button
await page.click('body > div.entry-container-inner > div > div.text-center > a');

await delay(1000*10);

// Answer Q1 $100 Million

const [element41] = await page.$x('//span[contains(text(), "$100 Million")]');
await element41.click();
await delay(1000*1);

// Answer Q2 zkSync

const [element42] = await page.$x('//span[contains(text(), "zkSync")]');
await element42.click();
await delay(1000*1);

// Answer Q3 Dogecoin
const [element43] = await page.$x('//span[contains(text(), "Dogecoin")]');
await element43.click();
await delay(1000*1);

// Answer Q4 7 days
const [element44] = await page.$x('//span[contains(text(), "7 days")]');
await element44.click();
await delay(1000*1);

// Answer Q5 ~2 to ~10 minutes
const [element45] = await page.$x('//span[contains(text(), "~2 to ~10 minutes")]');
await element45.click();
await delay(1000*1);

// Answer Q6 Yes
const [element46] = await page.$x('//span[contains(text(), "Yes")]');
await element46.click();
await delay(1000*1);

// Answer Q7 Hop runs a process in which you deposit your tokens on one chain and then releases tokens on the destination chain
const [element47] = await page.$x('//span[contains(text(), "Hop runs a process in which you deposit your tokens on one chain and then releases tokens on the destination chain")]');
await element47.click();
await delay(1000*1);

// Answer Q8 hTokens are bridge tokens transferred to account for your deposit on one chain, as to secure your withdrawal on the destination chain
const [element48] = await page.$x('//span[contains(text(), "hTokens are bridge tokens transferred to account for your deposit on one chain, as to secure your withdrawal on the destination chain")]');
await element48.click();
await delay(1000*1);

// Answer Q9 Yes
const [element49] = await page.$x('//span[contains(text(), "Yes")]');
await element49.click();
await delay(1000*1);

// Answer Q10 Fill Wallet
await page.type('#root > div > form > div.published-form__body > div.ant-row.fields > div:nth-child(12) > div > div > div.ant-col.ant-form-item-control > div.ant-form-item-control-input > div > span > span > input', wallet[i], { delay: 10 })

await delay(1000*1);

// Click Final Submit
await page.click('#root > div > form > div.published-form__footer > div > button');
await delay(1000*10);


// Screenshot
await page.screenshot({ path: `${i}4.png` });



context.close()

};


})

();
