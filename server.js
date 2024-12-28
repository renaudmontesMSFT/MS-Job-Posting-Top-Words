const express = require('express');
const puppeteer = require('puppeteer');
const cors = require('cors');
const useProxy = require('puppeteer-page-proxy');

const app = express();
const PORT = 8080;
// const PORT = 3000;

app.use(cors());

app.get('/fetch-content', async (req, res) => {
    const url = req.query.url;
    if (!url) {
        console.error('No URL provided');
        return res.status(400).send('URL is required');
    }

    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        console.log(`Navigating to URL: ${url}`);

        // Use proxy for the page
        //await useProxy(page, 'http://127.0.0.10:8080');

        await page.goto(url, { waitUntil: 'networkidle2' });

        // Wait for a specific element to ensure the page is fully rendered
        await page.waitForSelector('body');

        const content = await page.evaluate(() => document.body.innerText);
        await browser.close();
        console.log('Fetched content successfully');
        res.send(content);
    } catch (error) {
        console.error('Error fetching content:', error);
        res.status(500).send('Error fetching content');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
