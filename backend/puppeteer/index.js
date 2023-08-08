const puppeteer = require("puppeteer");
const fs = require("fs/promises");

async function useFetch() {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();

  await page.goto("https://www.elpais.com");

  const result = await page.evaluate(() => {
    const titles = document.querySelector(".c_t ").innerText;
    const data = [...titles];
    return data;
  });
  console.log(result);

  await fs.writeFile("text.json", JSON.stringify(result, null, 2));

  await browser.close();
}
useFetch();
