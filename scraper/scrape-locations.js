const scrapeIt = require("scrape-it")
const fs = require('fs');


let file;

try {
    file = fs.readFileSync('scraper/saarland.page.html', 'utf8')
    // console.log(file)
} catch (err) {
    console.error(err)
}

// console.log({file});

// Promise interface
// scrapeIt("https://www.saarland.de/DE/portale/corona/impfungtest/testzentrum/testmoeglichkeiten/schnelltestskommunen.html", {
const scrape = scrapeIt.scrapeHTML(file, {
    // test: "ul > li",

    locations: {
        listItem: "ul > li",
        data: {
            name: {
                selector:'strong'
            },
            misc: {
                how: 'html',
                trim: true
            },
        }
    }


});

// console.log(scrape);


const locations = [];
let index = 1;
for (const location of scrape.locations ) {

    if (location.name !== '') {
        const m = location.misc.replace(/<strong>.+<\/strong>/i, '');
        const tel = m.match(/([\d-]{6,}),?/i);
        const streetNumber = m.match(/,+((.*?)\s*(\d+\s*\w*)),+/i);
        const street = streetNumber && streetNumber.length >= 2 ? streetNumber[2].trim() : undefined;
        const number = streetNumber && streetNumber.length >= 3 ? streetNumber[3].trim() : undefined;
        const postal = m.match(/(?!01000|99999)(0[1-9]\d{3}|[1-9]\d{4})\s+/i);

        const l = {
            id: index++,
            name: location.name,
            // misc: location.misc,
            tel: tel ? tel[1] : undefined,
            street: street,
            number: number,
            postal: postal && postal.length > 1 ? postal[1]: undefined
        }
        locations.push(l);
    }
}

console.log(locations);

fs.writeFile('locations-ag.json', JSON.stringify(locations, null, 2), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});

// ).then(({data, response}) => {
//     console.log(`Status Code: ${response.statusCode}`)
//     console.log(data)
// })