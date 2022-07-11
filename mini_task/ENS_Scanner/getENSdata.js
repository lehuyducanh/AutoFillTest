const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const delay = require("delay");

var companyName = fs.readFileSync('companyName.txt').toString().replace(/[^a-zA-Z0-9\n]/g, "").split('\n');


async function getENSdata(name) {

  const browser = await puppeteer.launch({
    headless: true,

    // defaultViewport: { width: 1800, height: 1000, isLandscape: true },
    args: [
      // '--incognito',
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


  const page = await browser.newPage();



  await page.goto(`https://app.ens.domains/name/${name}.eth/details`);

  await page.waitForSelector('.css-1dqojoi.em9ajyt7');

  await delay(1000 * 10);

  var expirationDate = await page.evaluate(() => {

    let date = document.querySelectorAll('.css-1dqojoi.em9ajyt7');
    let dateString = date[0].innerText.replace("Remind Me", "").replace("\n", "");

    console.log(dateString);

    return dateString

  });

  console.log(name + "|" + expirationDate);

  fs.appendFileSync('ENSdata.txt', name + "|" + expirationDate + "\n");


  await browser.close();

}

async function main() {

  for (let i = 0; i < companyName.length; i++) {

    try {
      await getENSdata(companyName[i]);
    } catch (error) {
      console.log(error);
      continue;

    }

  }
}

main();

