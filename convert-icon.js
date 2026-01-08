import Jimp from 'jimp';
import pngToIco from 'png-to-ico';
import fs from 'fs';

async function convert() {
    try {
        const image = await Jimp.read('icon.png');
        await image.resize(256, 256).writeAsync('icon-resized.png');

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
