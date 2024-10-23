import { openai } from './api.js'; // Ensure this exports the OpenAI instance properly

async function listFineTunes() {
  try {
    // List the 10 most recent fine-tuning jobs
    const response = await openai.fineTuning.jobs.list({ limit: 10 });

    // Access the array of fine-tuning jobs and log the relevant details
    if (response.data && response.data.length > 0) {
      console.log('Fine-tuning jobs:');
      response.data.forEach((job, index) => {
        console.log(`\nJob ${index + 1}:`);
        console.log(`ID: ${job.id}`);
        console.log(`Model: ${job.model}`);
        console.log(`Status: ${job.status}`);
        console.log(
          `Created at: ${new Date(job.created_at * 1000).toLocaleString()}`
        );
      });
    } else {
      console.log('No fine-tuning jobs found.');
    }
  } catch (err) {
    console.error(
      'Error listing fine-tuning jobs:',
      err.response ? err.response.data : err.message
    );
  }
}

listFineTunes();
