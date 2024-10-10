const SitemapGenerator = require('sitemap-generator');

const generator = SitemapGenerator('https://symfa.com', {
    maxDepth: 0,
    filepath: './sitemap.xml',
    lastMod: true,
    // ignore: url => {
    //     return new RegExp('', 'g').test(url)
    // },
});

generator.on('add', (url) => {
    console.log('Added URL: ', url)
});

generator.on('ignore', (url) => {
    console.log('Ignored URL: ', url)
});

generator.on('error', (error) => {
    console.log(error);
});

generator.start()