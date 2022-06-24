const puppeteer = require('puppeteer');
const fs = require('fs');
const delay = require("delay");
const axios = require('axios');


var wallet = fs.readFileSync('wallet_htx.txt').toString().split("\r\n");

async function getnewip() {

  // Check condition to get new proxy
  var checkProxy = 0;

  while (!checkProxy) {
    var callproxy = await axios
      .post("https://tmproxy.com/api/proxy/get-new-proxy", {
        "api_key": "1b0ff1b292c001d4834d0197c5e74b77"
      })

    if (!callproxy.data.data.https) {
      console.log("Error get new proxy");
      await delay(1000 * 30);

    } else {
      checkProxy = 1;
      var proxy = callproxy.data.data.https;
      console.log("proxy is", proxy);
    }

  }

  return proxy;
}



async function runTest(wallet) {

  var proxy = await getnewip()

  const browser = await puppeteer.launch({
    headless: false,

    // defaultViewport: { width: 1800, height: 1000, isLandscape: true },
    args: [
      '--incognito',
      '--aggressive-cache-discard',
      // '--user-data-dir=D:\\Code\\BotMarket\\profileVIP1',
      `--proxy-server=${proxy}`,
      // //   '--no-sandbox',
      // //   '--disable-setuid-sandbox',
      // //   '--disable-dev-shm-usage',
      // //   '--disable-accelerated-2d-canvas',
      // //   '--no-first-run',
      // //   '--no-zygote',
      // //   '--disable-gpu'
    ]
  });


  const context = await browser.createIncognitoBrowserContext();


  const page = await context.newPage();
  

  // await page.goto('https://jinshuju.net/f/V9O6hT');

  await page.goto('https://jinshuju.net/f/V9O6hT', {
    waitUntil: 'networkidle2'
});


  
  
  // Click Start button
  await page.click('body > div.entry-container-inner > div > div.text-center > a');
  await delay(1000 * 6);

  // Answer Q1 O3 Interchange
const [element11] = await page.$x('//span[contains(text(), "O3 Interchange")]');
await element11.click();
await delay(500 * 1);

// Answer Q2 Swap
await page.evaluate(() => {
  Array.from(document.querySelectorAll("span"))
  .filter((span) => { return span.innerText === "Swap"})[0].click();
});

// Answer Q3 Transfer arbitrary assets on the source chain for the network fee of the target chain.
const [element13] = await page.$x('//span[contains(text(), "Transfer arbitrary assets on the source chain for the network fee of the target chain.")]');
await element13.click();
await delay(500 * 1);

// Answer Q4 Solana
const [element14] = await page.$x('//span[contains(text(), "Solana")]');
await element14.click();
await delay(500 * 1);

// Answer Q5 LP-BNB
const [element15] = await page.$x('//span[contains(text(), "LP-BNB")]');
await element15.click();
await delay(500 * 1);


// Answer Q6 O3
// await page.click('#root > div > form > div.published-form__body > div.ant-row.fields > div:nth-child(12) > div > div > div.ant-col.ant-form-item-control > div.ant-form-item-control-input > div > span > div > div:nth-child(4) > div > div > label > span:nth-child(2) > span');
// await delay(500 * 1);
await page.evaluate(() => {
  Array.from(document.querySelectorAll("span"))
  .filter((span) => { return span.innerText === "O3"})[0].click();
});


// Answer Q7 NPAPs
const [element17] = await page.$x('//span[contains(text(), "NPAPs")]');
await element17.click();
await delay(500 * 1);

// Answer Q8 The trading fee, 80%
const [element18] = await page.$x('//span[contains(text(), "The trading fee, 80%")]');
await element18.click();
await delay(500 * 1);

// Answer Q9 Aggregating multiple DEXs of source chain + target chain
const [element19] = await page.$x('//span[contains(text(), "Aggregating multiple DEXs of source chain + target chain")]');
await element19.click();
await delay(500 * 1);

// Answer Q10 Fill Wallet
await page.type('#root > div > form > div.published-form__body > div.ant-row.fields > div:nth-child(20) > div > div > div.ant-col.ant-form-item-control > div.ant-form-item-control-input > div > span > span > input', wallet, { delay: 10 })
await delay(500 * 1);
await page.type('#root > div > form > div.published-form__body > div.ant-row.fields > div:nth-child(22) > div > div > div.ant-col.ant-form-item-control > div.ant-form-item-control-input > div > span > span > input', wallet, { delay: 10 })
await delay(500 * 1);

// Click Final Submit
await page.click('#root > div > form > div.published-form__footer > div > button');
await delay(1000 * 6);


  /////// Enter Form 2

// await page.goto('https://jinshuju.net/f/JdNMkh');

await page.goto('https://jinshuju.net/f/JdNMkh', {  waitUntil: 'networkidle2'});




  // Click Start button
  await page.click('body > div.entry-container-inner > div > div.text-center > a');
  await delay(1000 * 6);


  // Answer Q1 wepiggy.org

  const [element21] = await page.$x('//span[contains(text(), "wepiggy.org")]');
  await element21.click();
  await delay(500 * 1);

  // Answer Q2 12

  const [element22] = await page.$x('//span[contains(text(), "12")]');
  await element22.click();
  await delay(500 * 1);

  // Answer Q3 Dividend
  const [element23] = await page.$x('//span[contains(text(), "Dividend")]');
  await element23.click();
  await delay(500 * 1);

// Answer Q4 8,000,000,000
const [element24] = await page.$x('//span[contains(text(), "8,000,000,000")]');
await element24.click();
await delay(500 * 1);

// Answer Q5 Fix WPC Reward Distribution
const [element25] = await page.$x('//span[contains(text(), "Fix WPC Reward Distribution")]');
await element25.click();
await delay(500 * 1);


  // Answer Q10 Fill Wallet
  await page.type('#root > div > form > div.published-form__body > div.ant-row.fields > div:nth-child(12) > div > div > div.ant-col.ant-form-item-control > div.ant-form-item-control-input > div > span > input', "Liquidation Reminder", { delay: 10 })
  await delay(500 * 1);
  await page.type('#root > div > form > div.published-form__body > div.ant-row.fields > div:nth-child(14) > div > div > div.ant-col.ant-form-item-control > div.ant-form-item-control-input > div > span > span > input', wallet, { delay: 10 })
  await delay(500 * 1);

  // Click Final Submit
  await page.click('#root > div > form > div.published-form__footer > div > button');
  await delay(1000 * 6);




  /////// Enter Form 3

  await page.goto('https://jinshuju.net/f/L6i5sn', {  waitUntil: 'networkidle2'});




  // Click Start button
  await page.click('body > div.entry-container-inner > div > div.text-center > a');
  await delay(1000 * 6);


  // Answer Q1 X Swap

  const [element31] = await page.$x('//span[contains(text(), "X Swap")]');
  await element31.click();
  await delay(500 * 1);

  // Answer Q2 XY Finance supports all above tokens

  const [element32] = await page.$x('//span[contains(text(), "XY Finance supports all above tokens")]');
  await element32.click();
  await delay(500 * 1);

  // Answer Q3 Gnosis Chain
  const [element33] = await page.$x('//span[contains(text(), "Gnosis Chain")]');
  await element33.click();
  await delay(500 * 1);

  // Answer Q4 XY Finance aggregates multiple DEXs and bridges
  const [element34] = await page.$x('//span[contains(text(), "XY Finance aggregates multiple DEXs and bridges")]');
  await element34.click();
  await delay(500 * 1);

  // Answer Q5 XY Finance helps you bridge and swap any token with the best swap rate
  const [element35] = await page.$x('//span[contains(text(), "XY Finance helps you bridge and swap any token with the best swap rate")]');
  await element35.click();
  await delay(500 * 1);

  // Answer Q6 XY Token is a bridge token to ensure users have an instant cross-chain experience
  const [element36] = await page.$x('//span[contains(text(), "XY Token is a bridge token to ensure users have an instant cross-chain experience")]');
  await element36.click();
  await delay(500 * 1);

  // Answer Q7 2 - 10 minutes
  const [element37] = await page.$x('//span[contains(text(), "2 - 10 minutes")]');
  await element37.click();
  await delay(500 * 1);

  // Answer Q8 Yes
  const [element38] = await page.$x('//span[contains(text(), "Yes")]');
  await element38.click();
  await delay(500 * 1);


  // Answer Q6 Fill Wallet
  await page.type('#root > div > form > div.published-form__body > div.ant-row.fields > div:nth-child(18) > div > div > div.ant-col.ant-form-item-control > div.ant-form-item-control-input > div > span > span > input', wallet, { delay: 10 })

  await delay(500 * 1);

  // Click Final Submit
  await page.click('#root > div > form > div.published-form__footer > div > button');
  await delay(1000 * 6);




 /////// Enter Form 4 Learn and earn at imToken - WOOFi

 await page.goto('https://jinshuju.net/f/Pi1S7m', {  waitUntil: 'networkidle2'});



 // Click Start button
 await page.click('body > div.entry-container-inner > div > div.text-center > a');

 await delay(1000 * 6);

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

  // Click Final Submit
  await page.click('#root > div > form > div.published-form__footer > div > button');
  await delay(1000 * 6);




  /////// Enter Form 5 Learn and earn at imToken - imKey


  await page.goto('https://jinshuju.net/f/pHzQ1z', {  waitUntil: 'networkidle2'});





  // Click Start button
  await page.click('body > div.entry-container-inner > div > div.text-center > a');

  await delay(1000 * 6);
  // Answer Q1 Import the mnemonic generated by imKey Pro into a hot wallet
  const [element51] = await page.$x('//span[contains(text(), "Import the mnemonic generated by imKey Pro into a hot wallet")]');
  await element51.click();
  await delay(500 * 1);


  // Answer Q2 Bluetooth and USB

  const [element52] = await page.$x('//span[contains(text(), "Bluetooth and USB")]');
  await element52.click();
  await delay(500 * 1);

  // Answer Q3 PIN Blinding code Mnemonic
  await page.evaluate(() => {
    Array.from(document.querySelectorAll("span"))
    .filter((span) => { return span.innerText === "PIN"})[0].click();
  });
  await delay(500 * 1);

  await page.evaluate(() => {
    Array.from(document.querySelectorAll("span"))
    .filter((span) => { return span.innerText === "Binding code"})[0].click();
  });
  await delay(500 * 1);

  await page.evaluate(() => {
    Array.from(document.querySelectorAll("span"))
    .filter((span) => { return span.innerText === "Mnemonic"})[0].click();
  });
  await delay(500 * 1);


  // Answer Q4 imKey Pro enables data interaction with imToken  via the Internet
  const [element54] = await page.$x('//span[contains(text(), "imKey Pro enables data interaction with imToken  via the Internet")]');
  await element54.click();
  await delay(500 * 1);

  // Answer Q5 The loss of mnemonic
  const [element55] = await page.$x('//span[contains(text(), "The loss of mnemonic")]');
  await element55.click();
  await delay(500 * 1);

  // Answer Q7 All of the above

      await page.evaluate(() => {
        Array.from(document.querySelectorAll("span"))
        .filter((span) => { return span.innerText === "All of the above"})[0].click();
      });

   
  // Answer Q8 Set a strong PIN, Accurately write down the binding code and keep it in a safe place, Back up the mnemonic carefully and and keep it in a safe place
  const [element581] = await page.$x('//span[contains(text(), "Set a strong PIN")]');
  await element581.click();
  await delay(500 * 1);

  const [element582] = await page.$x('//span[contains(text(), "Accurately write down the binding code and keep it in a safe place")]');
  await element582.click();
  await delay(500 * 1);

  const [element583] = await page.$x('//span[contains(text(), "Back up the mnemonic carefully and and keep it in a safe place")]');
  await element583.click();
  await delay(500 * 1);

  const [element584] = await page.$x('//span[contains(text(), "imKey Pro needs to check the irreversible seal before using it for the first time")]');
  await element584.click();
  await delay(500 * 1);

  // Answer Q9 Multipick
  const [element591] = await page.$x('//span[contains(text(), "Offline creation and storage of Private Key")]');
  await element591.click();
  await delay(500 * 1);

  const [element592] = await page.$x('//span[contains(text(), "Basic wallet functions, i.e. receiving and transferring money")]');
  await element592.click();
  await delay(500 * 1);

  const [element593] = await page.$x('//span[contains(text(), "Match imToken Interaction DApp")]');
  await element593.click();
  await delay(500 * 1);

  const [element594] = await page.$x('//span[contains(text(), "Mainstream Layer 2 networks and EVM-compatible chains")]');
  await element594.click();
  await delay(500 * 1);

  // Answer Q10 Fill Wallet
  await page.type('#root > div > form > div.published-form__body > div.ant-row.fields > div:nth-child(18) > div > div > div.ant-col.ant-form-item-control > div.ant-form-item-control-input > div > span > span > input', wallet, { delay: 10 })

  await delay(500 * 1);

  // Click Final Submit
  await page.click('#root > div > form > div.published-form__footer > div > button');
  await delay(1000 * 6);


 /////// Enter Form 6 Learn and earn at imToken - Celer

 await page.goto('https://jinshuju.net/f/gj6uYF', {  waitUntil: 'networkidle2'});




 // Click Start button
 await page.click('body > div.entry-container-inner > div > div.text-center > a');
 await delay(1000 * 6);

 // Answer Q1 Transfer money with imKey Pro
 await page.click('#root > div > form > div.published-form__body > div.ant-row.fields > div:nth-child(2) > div > div > div.ant-col.ant-form-item-control > div.ant-form-item-control-input > div > span > div > div:nth-child(4) > div > div > label > span:nth-child(2) > span');
 await delay(500 * 1);


 // Answer Q2 The transfer fees go directly to the Celer team

 const [element62] = await page.$x('//span[contains(text(), "The transfer fees go directly to the Celer team")]');
 await element62.click();
 await delay(500 * 1);


 // Answer Q4 Over 30
 const [element64] = await page.$x('//span[contains(text(), "Over 30")]');
 await element64.click();
 await delay(500 * 1);

 // Answer Q5 xLiquidity and xAsset
 const [element65] = await page.$x('//span[contains(text(), "xLiquidity and xAsset")]');
 await element65.click();
 await delay(500 * 1);

 // Answer Q6 All of the above

await page.click('#root > div > form > div.published-form__body > div.ant-row.fields > div:nth-child(10) > div > div > div.ant-col.ant-form-item-control > div.ant-form-item-control-input > div > span > div > div:nth-child(4) > div > div > label > span:nth-child(2) > span')
await delay(500 * 1);

  
 // Answer Q8 A validator node can act maliciously toward the network without being punished.
 const [element68] = await page.$x('//span[contains(text(), "A validator node can act maliciously toward the network without being punished.")]');
 await element68.click();
 await delay(500 * 1);



 // Answer Q10 Fill Wallet
 await page.type('#root > div > form > div.published-form__body > div.ant-row.fields > div:nth-child(14) > div > div > div.ant-col.ant-form-item-control > div.ant-form-item-control-input > div > span > span > input', wallet, { delay: 10 })

 await delay(500 * 1);

  // Click Final Submit
  await page.click('#root > div > form > div.published-form__footer > div > button');
  await delay(1000 * 6);



  /////// Enter Form 7 Learn and earn at imToken - imToken General Safety Knowledge

  await page.goto('https://jinshuju.net/f/IWVodP', {  waitUntil: 'networkidle2'});


  // Click Start button
  await page.click('body > div.entry-container-inner > div > div.text-center > a');

  await delay(1000 * 6);
  // Answer Q1 Realize that this is a scam and report the group immediately
  const [element71] = await page.$x('//span[contains(text(), "Realize that this is a scam and report the group immediately")]');
  await element71.click();
  await delay(500 * 1);


  // Answer Q2 Immediately realize that this is a scam and ignore the airdrop tokens

  const [element72] = await page.$x('//span[contains(text(), "Immediately realize that this is a scam and ignore the airdrop tokens")]');
  await element72.click();
  await delay(500 * 1);


  // Answer Q3 Realize that he is an impersonator because imToken is a non-custodial wallet, so no one can freeze my wallet.
  const [element73] = await page.$x('//span[contains(text(), "Realize that he is an impersonator because imToken is a non-custodial wallet, so no one can freeze my wallet.")]');
  await element73.click();
  await delay(500 * 1);

  // Answer Q4 Realize that it's probably a scam and contact imToken officials in the App to check it out
  const [element74] = await page.$x('//span[contains(text(), "probably a scam and contact imToken officials in the App to check it out")]');
  await element74.click();
  await delay(500 * 1);

  // Answer Q5 The transfer page has a scan icon in the top right corner
  const [element75] = await page.$x('//span[contains(text(), "The transfer page has a scan icon in the top right corner")]');
  await element75.click();
  await delay(500 * 1);


  // Answer Q8 A validator node can act maliciously toward the network without being punished.
  await page.click('#root > div > form > div.published-form__body > div.ant-row.fields > div:nth-child(12) > div > div > div.ant-col.ant-form-item-control > div.ant-form-item-control-input > div > span > div > div:nth-child(1) > div > div > label > span:nth-child(2) > span')
  await page.click('#root > div > form > div.published-form__body > div.ant-row.fields > div:nth-child(12) > div > div > div.ant-col.ant-form-item-control > div.ant-form-item-control-input > div > span > div > div:nth-child(2) > div > div > label > span:nth-child(2) > span')
  await page.click('#root > div > form > div.published-form__body > div.ant-row.fields > div:nth-child(12) > div > div > div.ant-col.ant-form-item-control > div.ant-form-item-control-input > div > span > div > div:nth-child(3) > div > div > label > span:nth-child(2) > span') 
  await page.click('#root > div > form > div.published-form__body > div.ant-row.fields > div:nth-child(12) > div > div > div.ant-col.ant-form-item-control > div.ant-form-item-control-input > div > span > div > div:nth-child(4) > div > div > label > span:nth-child(2) > span') 

  // Answer Q10 Fill Wallet
  await page.type('#root > div > form > div.published-form__body > div.ant-row.fields > div:nth-child(14) > div > div > div.ant-col.ant-form-item-control > div.ant-form-item-control-input > div > span > span > input', wallet, { delay: 10 })

  await delay(500 * 1);

  // Click Final Submit
  await page.click('#root > div > form > div.published-form__footer > div > button');
  await delay(1000 * 6);



  context.close()
  browser.close()
};

async function final() {

  for (let i = 0; i < wallet.length; i++) {

    try {
      console.log(`${i} done`);
      await runTest(wallet[i])

    } catch (error) {
      console.log(error);
      console.log("Error: Catch")
      i--;
      continue;
    }

  }
}

final()


