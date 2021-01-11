const puppeteer = require("puppeteer");
const dragAndDrop = require("./drag-and-drop");
const spotifyWebUrl = "https://open.spotify.com/";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const mouse = page.mouse;
  await page.goto(spotifyWebUrl);
  await page.setViewport({
    width: 1200,
    height: 800,
  });
  await page.waitForTimeout(1000);

  await page.click(
    ".b00fbb9732b9fe65ded1ba887be5aef9-scss > div:nth-child(5) > button:nth-child(2)"
  );
  await page.waitForTimeout(2000);

  await page.click(".btn-facebook");
  await page.waitForTimeout(2000);

  await page.type("#email", "winnie199942@hotmail.com");
  await page.type("#pass", "xiaoyongyi");
  await page.click("#loginbutton");
  await page.waitForTimeout(7000);

  //   await page.click(
  //     "div.os-padding:nth-child(4) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > div:nth-child(2) > li:nth-child(1) > a:nth-child(1)"
  //   );
  await page.goto("https://open.spotify.com/playlist/4u2Uiu5VUmsoRAZUrHrI1E");
  await page.waitForTimeout(5000);
  const loving = await page.$(
    "div.c27f49a483c85a5b88b3f37fb918e497-scss:nth-child(2) > div:nth-child(2) > div:nth-child(1)"
  );
  const dance = await page.$(
    "div.c27f49a483c85a5b88b3f37fb918e497-scss:nth-child(2) > div:nth-child(2) > div:nth-child(2)"
  );
  const loveBox = await loving.boundingBox();
  const danceBox = await dance.boundingBox();

  await mouse.move(loveBox.x + 1, loveBox.y + 1);
  await mouse.down();
  await mouse.move(loveBox.x + 1, loveBox.y + 56 * 2);
  await mouse.up();
  await page.waitForTimeout(4000);

  await page.screenshot({ path: "ss.png" });
  await browser.close();
})();
