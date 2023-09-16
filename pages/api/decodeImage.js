const { Buffer } = require('buffer');
const Tesseract = require('tesseract.js');

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(400).send({ message: 'Only POST requests allowed' });
    return;
  }

  const body = JSON.parse(req.body);
  const snapshot = body.snapshot;

  if (!snapshot) {
    res.status(400).json({ found: false, error: true });
    return;
  }
  res.status(200).json({ message: 'success' });

  function decodeDataUriToBuffer(dataUri) {
    const data = dataUri.split(';base64,').pop();
    return Buffer.from(data, 'base64');
  }

  const imageBuffer = decodeDataUriToBuffer(snapshot);
  Tesseract.recognize(imageBuffer, 'eng', { logger: m => console.log(m) })
  .then(({ data: { text } }) => {
    // Extracted text from OCR
    console.log('Extracted Text:', text);
  })
  .catch(error => {
    console.error('OCR Error:', error);
  });

};

export default handler;
