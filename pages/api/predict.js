import * as tf from '@tensorflow/tfjs-node';

async function loadModel() {
  const modelPath = './tfjs_model/model.json'; // Replace with the actual path
  const model = await tf.loadLayersModel(`file://${modelPath}`);
  return model;
}

export default async function handler(req, res) {
  try {
    const model = await loadModel();

    // Check if the model is loaded correctly
    if (!model) {
      res.status(500).json({ error: 'Model loading failed.' });
      return;
    }

    // You can now use the loaded model for predictions or other tasks
    // For example, you can make a test prediction here
    const testInput = tf.tensor2d([[1, 85, 66, 29, 0, 26.6, 0.351, 31]], [1, 8]);
    const predictions = await model.predict(testInput).dataSync();
    
    res.status(200).json({ message: 'Model loaded successfully', predictions });
  } catch (error) {
    console.error('Error in API handler:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
