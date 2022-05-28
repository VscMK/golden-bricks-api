const QRCode = require('qrcode');
const multer = require("multer");
const Jimp = require('jimp');

exports.createPngFile = async fileName => {
    let image = new Jimp(3, 3, function(err, image) {
        if (err) throw err;
    })

    image.write('public/uploads/qrCodes/' + fileName + '.png', (err) => {
        if (err) throw err;
    });

}

exports.generateQR = async(url, fileName) => {

    QRCode.toFile('public/uploads/qrCodes/' + fileName + '.png', url, {
        color: {
            dark: '#00F', // Blue dots
            light: '#0000' // Transparent background
        }
    }, function(err) {
        if (err) throw err
        console.log('Done')
    })
}