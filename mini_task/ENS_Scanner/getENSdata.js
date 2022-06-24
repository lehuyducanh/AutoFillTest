const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const brower = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: [
      '--incognito',
      '--aggressive-cache-discard',
      '--user-data-dir=D:\\Code\\BotMarket\\profileVIP1',
      '--proxy-server=socks5://localhost:9050',
      // '--no-sandbox',
      // '--disable-setuid-sandbox',
      // '--disable-dev-shm-usage',
      // '--disable-accelerated-2d-canvas',
      // '--no-first-run',
      // '--no-zygote',
      // '--disable-gpu'
    ]
  });

    const page = await browser.newPage();
    await page.goto('https://app.ens.domains/name/houbi.eth/details', {  waitUntil: 'networkidle2'});

    var expirationDate = await page.evaluate(() => {
        return document.querySelector('.css-1dqojoi.em9ajyt7').innerText;
    });
    

    console.log(expirationDate);




  return browser;
}

