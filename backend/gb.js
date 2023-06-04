const puppeteer = require("puppeteer");
async function tutorial() {
    try {
        const amazon_url = "https://www.amazon.com/gp/goldbox";
        // Launch the headless browser 
        const browser = await puppeteer.launch();
        const basePage = await browser.newPage();
        // Go to the webpage 
        await basePage.goto(amazon_url, { timeout: 0 });
        await basePage.waitForSelector('[data-testid="deal-card"]');
        // Perform a function within the given webpage context 
        const data = await basePage.evaluate(() => {
            const results = [];
            const items = document.querySelectorAll('[data-testid="deal-card"]');
            items.forEach(item => {
                const item_ = {
                    name: "hello",
                    dealId: item.getAttribute("data-deal-id"),
                    url: item.querySelector("a.a-size-mini.a-link-normal").getAttribute("href"),
                    shortDescription: item.querySelector("a.a-size-mini.a-link-normal").getAttribute("title"),
                    image: item.querySelector("img").getAttribute("src")
                }
                results.push(item_);
            });

            return results;
        });
        const [page] = await browser.pages();
        const usernames = [];

        for (let i = 0; i < data.length; i++) {
            const subPageURL = data[i].url;
            await page.goto(`${subPageURL}`, {
                waitUntil: "domcontentloaded"
            });

            usernames.push({
                title: await page.evaluate((el) => document.querySelector(".a-container h1") && document.querySelector(".a-container h1").textContent.toString()),
                products: await page.evaluate((el) => {

                    const _items = document.querySelectorAll(".a-container .a-list-item");
                    const productPageTitle = document.querySelector("#productTitle");
                    const products = []
                    if (productPageTitle === null) {
                        _items.forEach((item) => {
                            const img = item.querySelector("img") && item.querySelector("img").getAttribute("src");
                            const url = item.querySelector(".a-link-normal") && item.querySelector(".a-link-normal").getAttribute("href");
                            const title = item.querySelector(".a-link-normal") && item.querySelector(".a-link-normal").getAttribute("title");
                            const price = item.querySelector(".a-price span") && item.querySelector(".a-price span").innerHTML;
                            const oldPrice = item.querySelector(".octopus-widget-strike-through-price") !== null && item.querySelector("span.octopus-widget-strike-through-price").textContent
                            img !== null &&
                                products.push({
                                    img: img,
                                    url: url,
                                    title: title,
                                    price: price,
                                    oldPrice: oldPrice
                                })
                        })
                    } else {
                        const productPageImg = document.querySelector("#imgTagWrapperId img").getAttribute("src");
                        const productPageApexPriceToPay = document.querySelector(".apexPriceToPay .a-offscreen") && document.querySelector(".apexPriceToPay .a-offscreen").textContent;
                        const productPageListedPrice = document.querySelector(".a-price.a-text-price .a-offscreen") && document.querySelector(".a-price.a-text-price .a-offscreen").textContent;
                        products.push({
                            img: productPageImg,
                            url: document.URL,
                            title: productPageTitle.textContent,
                            price: productPageApexPriceToPay,
                            oldPrice: productPageListedPrice
                        })
                    }
                    return products;

                }),
            })
        }

        console.log(usernames);
        await browser.close();
    } catch (error) {
        console.error(error);
    }
}

tutorial();