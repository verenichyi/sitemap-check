const axios = require('axios');
const parseString = require('xml2js').parseString;

const sitemapUrl = 'https://symfa.com/sitemap.xml';
const targetStrings = [
    // '/Business',
    'https://symfa.com/business',
    '/business'
];

async function searchStrings(url) {
    try {
        const response = await axios.get(url);

        targetStrings.forEach((targetString) => {
            if (response.data.includes(targetString) || response.data.match(/https:\/\/symfa.com\/Business.*Intelligence.*/g)) {
                console.log(`String '${targetString}' found in ${url}`);
            }
        });
    } catch (error) {
        console.error(`Error fetching ${url}: ${error.message}`);
    }
}

async function parseSitemap(url) {
    try {
        const response = await axios.get(url);

        // parse xml
        parseString(response.data, (err, result) => {
            if (err) {
                console.error(`Error parsing sitemap: ${err.message}`);
                return;
            }

            const urls = result.urlset.url.map((item) => item.loc[0]);
            urls.forEach((url) => searchStrings(url));
        });
    } catch (error) {
        console.error(`Error fetching sitemap: ${error.message}`);
    }
}

parseSitemap(sitemapUrl);
