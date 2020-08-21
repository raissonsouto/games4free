const puppeteer = require('puppeteer')
const fs = require('fs')

async function scraper(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)

    const title = await page.evaluate(

        () => Array.from(document.querySelectorAll(
            'section.css-1nzrk0w-CardGrid-styles__groupWrapper:nth-child(2) .css-tybchz-OfferTitleInfo__title'
        ))
        .map(title => {
            console.log(title.innerHTML)
            title.innerText.trim()
        })
    )

    console.log(title)

    browser.close()
}

scraper('https://www.epicgames.com/store/en-US/')
