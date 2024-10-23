import { openai } from './api.js'; // Assuming 'api.js' correctly exports the OpenAI instance
import fs from 'fs'; // For creating the file stream
import { promises as fsPromises } from 'fs'; // For promise-based operations like checking file existence and writing

async function upload() {
  try {
    // Define the file paths
    const filePath = './training-data.jsonl'; // Updated as per your request
    const fileIdPath = './file-id.txt'; // File to save the file ID

    // Check if the file exists before uploading
    try {
      await fsPromises.access(filePath); // Ensure the file exists
    } catch (err) {
      throw new Error(`File at path "${filePath}" does not exist.`);
    }

    // Read the file stream and upload the file
    const fileStream = fs.createReadStream(filePath); // Use 'fs' to create a readable stream

    const response = await openai.files.create({
      purpose: 'fine-tune',
      file: fileStream,
    });

    // Extract the file ID
    const fileId = response.id;
    console.log('File ID: ', fileId);

    // Save the file ID to a file
    await fsPromises.writeFile(fileIdPath, fileId, 'utf8');
    console.log(`File ID saved to ${fileIdPath}`);
  } catch (err) {
    console.error('Error during file upload: ', err.message);
  }
}

upload();
