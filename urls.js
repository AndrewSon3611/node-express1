const fs = require('fs').promises;
const axios = require('axios');
const { URL } = require('url');

async function fetchAndSaveHtml(url) {
    try {
        const { data } = await axios.get(url);
        const parsedUrl = new URL(url);
        const outputFilename = `${parsedUrl.hostname}.txt`;

        await fs.writeFile(outputFilename, data);
        console.log(`Wrote to ${parsedUrl.hostname}`);
    } catch (error) {
        console.error(`Error processing ${url}:`, error.message);
    }
}

async function processUrls(filename) {
    try {
        const data = await fs.readFile(filename, 'utf-8');
        const urls = data.split('\n').filter(Boolean);

        await Promise.all(urls.map(fetchAndSaveHtml));
    } catch (error) {
        console.error(`Error reading file ${filename}:`, error.message);
    }
}

// Get the filename from the command line arguments
const filename = process.argv[2];

// Check if the filename is provided
if (!filename) {
    console.error('Usage: node urls.js FILENAME');
    process.exit(1);
}

// Start processing URLs
processUrls(filename);