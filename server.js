const dealabs_url =
  "https://www.dealabs.com/discussions/le-topic-des-demandes-de-parrainage-1057049?page=378#thread-comments";
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.once("load", () => console.log("Page loaded!"));

  const declineall = 'button[data-t-a.name="continueWithoutAcceptingBtn"]';
  await page.goto(dealabs_url);
  const results = await page.$$("div.comment-body");
  for (let a of results) {
    console.log(a.toString());
  }
  await page.screenshot({ path: "home.png" });

  await browser.close();
})();
