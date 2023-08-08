/*
import puppeteer from "puppeteer";

export const useFetch = async () => {
  try {
    const browser = await puppeteer.launch({
      headless: false,
    });
    const page = await browser.newPage();

    await page.goto("www.elpais.com");

    const result = await page.evaluate(() => {
      const titles = document.querySelector("h3").innerText;
      return titles;
    });
    console.log(result);
    await browser.close();
    return result;
  } catch (error) {
    console.info("useFetch error: ", error);
  }
};
 */
