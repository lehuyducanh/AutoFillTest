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


  await page.goto('https://jinshuju.net/f/T0NBGx');

  await delay(1000 * 8);


  // Click Start button
  await page.click('body > div.entry-container-inner > div > div.text-center > a');

  await delay(1000 * 8);

  // Answer Q1 Backup wallet address and password
  const [element11] = await page.$x('//span[contains(text(), "Backup wallet address and password")]');
  await element11.click();
  await delay(1000 * 1);

  // Answer Q2 Write down the mnemonic on a piece of paper after ensuring you are not being monitored, and keep the paper in a safe place.

  const [element12] = await page.$x('//span[contains(text(), "Write down the mnemonic on a piece of paper after ensuring you are not being monitored, and keep the paper in a safe place.")]');
  await element12.click();
  await delay(1000 * 1);

  // Answer Q3 She lost her assets forever
  const [element13] = await page.$x('//span[contains(text(), "She lost her assets forever")]');
  await element13.click();
  await delay(1000 * 1);

  // Answer Q4 As Keystore is an encrypted private key, it can be transferred through email.
  const [element14] = await page.$x('//span[contains(text(), "As Keystore is an encrypted private key, it can be transferred through email.")]');
  await element14.click();
  await delay(1000 * 1);

  // Answer Q5 Even if the mnemonic is compromised, others still need the wallet address to steal your
  const [element15] = await page.$x('//span[contains(text(), "Even if the mnemonic is compromised, others still need the wallet address to steal your")]');
  await element15.click();
  await delay(1000 * 1);

  // Answer Q6 Fill Wallet
  await page.type('#root > div > form > div.published-form__body > div.ant-row.fields > div:nth-child(12) > div > div > div.ant-col.ant-form-item-control > div.ant-form-item-control-input > div > span > span > input', wallet, { delay: 10 })

  await delay(1000 * 1);

  // Click Final Submit
  await page.click('#root > div > form > div.published-form__footer > div > button');
  await delay(1000 * 8);


  // Screenshot
  await page.screenshot({ path: `${i}1.png` });

  /////// Enter Form 2

  await page.goto('https://jinshuju.net/f/qlMIXR');

  await delay(1000 * 8);


  // Click Start button
  await page.click('body > div.entry-container-inner > div > div.text-center > a');

  await delay(1000 * 8);

  // Answer Q1 2.9.0

  const [element21] = await page.$x('//span[contains(text(), "2.9.0")]');
  await element21.click();
  await delay(1000 * 1);

  // Answer Q2 My Profile - Explore

  const [element22] = await page.$x('//span[contains(text(), "My Profile - Explore")]');
  await element22.click();
  await delay(1000 * 1);

  // Answer Q3 10
  const [element23] = await page.$x('//span[contains(text(), "10")]');
  await element23.click();
  await delay(1000 * 1);

  // Answer Q6 Fill Wallet
  await page.type('#root > div > form > div.published-form__body > div.ant-row.fields > div:nth-child(8) > div > div > div.ant-col.ant-form-item-control > div.ant-form-item-control-input > div > span > span > input', wallet, { delay: 10 })

  await delay(1000 * 1);

  // Click Final Submit
  await page.click('#root > div > form > div.published-form__footer > div > button');
  await delay(1000 * 8);


  // Screenshot
  await page.screenshot({ path: `${i}2.png` });

  /////// Enter Form 3

  await page.goto('https://jinshuju.net/f/bZVTV4');

  await delay(1000 * 8);


  // Click Start button
  await page.click('body > div.entry-container-inner > div > div.text-center > a');

  await delay(1000 * 8);

  // Answer Q1 Tokenlon

  const [element31] = await page.$x('//span[contains(text(), "Tokenlon")]');
  await element31.click();
  await delay(1000 * 1);

  // Answer Q2 Decentralized Exchange

  const [element32] = await page.$x('//span[contains(text(), "Decentralized Exchange")]');
  await element32.click();
  await delay(1000 * 1);

  // Answer Q3 All the statements above are wrong
  const [element33] = await page.$x('//span[contains(text(), "All the statements above are wrong")]');
  await element33.click();
  await delay(1000 * 1);

  // Answer Q4 All of the above
  const [element34] = await page.$x('//span[contains(text(), "All of the above")]');
  await element34.click();
  await delay(1000 * 1);

  // Answer Q5 Miner fee
  const [element35] = await page.$x('//span[contains(text(), "Miner fee")]');
  await element35.click();
  await delay(1000 * 1);

  // Answer Q6 Fill Wallet
  await page.type('#root > div > form > div.published-form__body > div.ant-row.fields > div:nth-child(10) > div > div > div.ant-col.ant-form-item-control > div.ant-form-item-control-input > div > span > span > input', wallet, { delay: 10 })

  await delay(1000 * 1);

  // Click Final Submit
  await page.click('#root > div > form > div.published-form__footer > div > button');
  await delay(1000 * 8);


  // Screenshot
  await page.screenshot({ path: `${i}3.png` });

  /////// Enter Form 4

  await page.goto('https://jinshuju.net/f/VCfxKE');

  await delay(1000 * 8);


  // Click Start button
  await page.click('body > div.entry-container-inner > div > div.text-center > a');

  await delay(1000 * 8);

  // Answer Q1 CC EAL6+

  const [element41] = await page.$x('//span[contains(text(), "CC EAL6+")]');
  await element41.click();
  await delay(1000 * 1);

  // Answer Q2 Bluetooth and USB

  const [element42] = await page.$x('//span[contains(text(), "Bluetooth and USB")]');
  await element42.click();
  await delay(1000 * 1);

  // Answer Q3 All of the above
  const [element43] = await page.$x('//span[contains(text(), "All of the above")]');
  await element43.click();
  await delay(1000 * 1);

  // Answer Q4 Mnemonic
  const [element44] = await page.$x('//span[contains(text(), "Mnemonic")]');
  await element44.click();
  await delay(1000 * 1);

  // Answer Q5 Binding code
  const [element45] = await page.$x('//span[contains(text(), "Binding code")]');
  await element45.click();
  await delay(1000 * 1);

  // Answer Q6 PIN
  const [element46] = await page.$x('//span[contains(text(), "PIN")]');
  await element46.click();
  await delay(1000 * 1);

  // Answer Q7 11
  const [element47] = await page.$x('//span[contains(text(), "11")]');
  await element47.click();
  await delay(1000 * 1);



  // Answer Q10 Fill Wallet
  await page.type('#root > div > form > div.published-form__body > div.ant-row.fields > div:nth-child(12) > div > div > div.ant-col.ant-form-item-control > div.ant-form-item-control-input > div > span > span > input', wallet, { delay: 10 })

  await delay(1000 * 1);

  // Click Final Submit
  await page.click('#root > div > form > div.published-form__footer > div > button');
  await delay(1000 * 8);


  // // Screenshot
  await page.screenshot({ path: `${i}4.png` });

  context.close()
  browser.close()
};

async function final() {

  for (let i = 0; i < 1; i++) {

    try {
      console.log(`${i} done`);
      await runTest(wallet[i])

    } catch (error) {
      console.log("Error: Catch")
      i--;
      continue;
    }

  }
}

final()


