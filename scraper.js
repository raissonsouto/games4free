const puppeteer = require('puppeteer')

async function scraper(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)

    const title = await page.evaluate(

        () => Array.from(document.querySelectorAll('div.css-1991d8r span.OfferTitleInfo-title_abc02a91'))
        .map(title => title.innerText.trim())
    )

    const img = await page.evaluate(

        () => Array.from(document.querySelectorAll('div.css-1991d8r img'))
        .map(img => img.src)
    )

    browser.close()

    return [title, img]
}