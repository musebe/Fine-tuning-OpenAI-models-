import { openai } from './api.js'; // Assuming 'api.js' correctly exports the OpenAI instance
import { promises as fsPromises } from 'fs'; // For reading the saved file ID

async function createFineTune() {
  try {
    // Read the file ID from file-id.txt
    const fileIdPath = './file-id.txt';
    const fileId = await fsPromises.readFile(fileIdPath, 'utf8');

    // Create the fine-tuning job
    const response = await openai.fineTuning.jobs.create({
      training_file: fileId.trim(), // Use the file ID from the upload
      model: 'gpt-4o-mini-2024-07-18', // Switch to the fine-tuning compatible GPT-4 mini model
      hyperparameters: { n_epochs: 3 }, // Adjust the number of epochs as needed
    });

    console.log('Fine-tuning job created successfully:', response);
  } catch (err) {
    console.error('Error creating fine-tuning job:', err.message);
  }
}

createFineTune();
