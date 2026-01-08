const sharp = require('sharp');
const pngToIco = require('png-to-ico');
const fs = require('fs');

async function convert() {
    try {
        console.log('Resizing with Sharp...');
        await sharp('icon.png')
            .resize(256, 256)
            .toFile('icon-resized.png');

        console.log('Converting to ICO...');
        const buf = await pngToIco('icon-resized.png');
        fs.writeFileSync('icon.ico', buf);
        console.log('Successfully created icon.ico');

        // Clean up
        fs.unlinkSync('icon-resized.png');
    } catch (err) {
        console.error('Error converting icon:', err);
        process.exit(1);
    }
}

convert();
