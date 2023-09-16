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

  function filterText(text) {
    const englishWordPattern = /\b[a-zA-Z]+\b/g;

    // Use the regular expression to find English words in the text
    const englishWords = text.match(englishWordPattern);
    const returnWords = englishWords.filter((word) => word.length > 0)
    return returnWords;
  }

  function createKeyValuePairs(text) {
    const lines = text.split('\n');
    const keyValuePairs = {};
  
    for (let line of lines) {
      const parts = line.split(':');
      if (parts.length === 2) {
        const key = parts[0].trim();
        const value = parts[1].trim();
        keyValuePairs[key] = value;
      }
    }
  
    return keyValuePairs;
  }

  const imageBuffer = decodeDataUriToBuffer(snapshot);
  Tesseract.recognize(imageBuffer, 'eng')
  .then(({ data: { text } }) => {
    const keyValuePairs = createKeyValuePairs(text);
    console.log(keyValuePairs);
  })
  .catch(error => {
    console.error('OCR Error:', error);
  });

};

export default handler;
