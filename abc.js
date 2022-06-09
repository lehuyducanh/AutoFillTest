const fs = require('fs');
const axios = require('axios');
const puppeteer = require('puppeteer');

var browser = await puppeteer.launch({ headless: false });

var browser2 = await puppeteer.launch({ headless: false });

var browser3 = await puppeteer.launch({ headless: false });