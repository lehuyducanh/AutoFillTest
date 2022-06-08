const fs = require('fs');
const axios = require('axios');
const puppeteer = require('puppeteer');

var browser = await puppeteer.launch({ headless: false });