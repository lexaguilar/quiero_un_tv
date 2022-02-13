

const { chromium } = require('playwright-chromium');
const { writeData } = require('./config');

const shops = [
    {
        productId:'tv_59_rca',
        vendor: 'Siman',
        url: 'https://ni.siman.com/smart-tv-led-rca-59-103428711/p',
        checkPrice: async ({ page }) => {
          const price = await page.textContent('.vtex-flex-layout-0-x-flexRow--row-two-price');
          return price;
        }
    },

    // {
    //     vendor: 'Siman',
    //     url: 'https://ni.siman.com/smart-tv-led-rca-50-103428710/p',
    //     checkPrice: async ({ page }) => {
    //       const price = await page.textContent('.vtex-flex-layout-0-x-flexRow--row-two-price');
    //       return price;
    //     }
    // },
]

const getPrice = priceString => {
    const priceSplit = priceString.split('USD');

    const value = priceSplit[priceSplit.length - 1];

    return parseFloat(value.trim());
}

const processData = async () => {

    const browser = await chromium.launch({ headless: true });
  
    for (const shop of shops) {
      const { checkPrice, vendor, url, productId } = shop;
  
      const page = await browser.newPage();
      await page.goto(url);
  
      const price = await checkPrice({ page }); 

      const priceNumber = getPrice(price);
  
      //await page.screenshot({ path: `screenshots/${vendor}.png` });    
      writeData({
        productId,
        price: priceNumber,
        vendor,
        created: new Date()
      });

      await page.close()
    }
  
    await browser.close();
    console.log('Done');
  };

  module.exports = {
    processData
  }
