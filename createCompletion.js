import { openai } from './api.js'; // Assuming 'api.js' correctly exports the OpenAI instance
import fs from 'fs/promises'; // For writing to a file asynchronously

async function generatePost() {
  try {
    // Use the fine-tuned model ID from the successful fine-tuning job
    const fineTunedModelId = 'ft:gpt-4o-mini-2024-07-18:masai-code::ALWTKVo7'; // Replace with your actual fine-tuned model ID

    const response = await openai.chat.completions.create({
      model: fineTunedModelId, // Replace with the fine-tuned model ID
      messages: [
        {
          role: 'system',
          content:
            'You are generating a social media post for X. Keep the message under 280 characters, use a casual tone, break the post into paragraphs, and include no more than 2 hashtags.',
        },
        {
          role: 'user',
          content:
            'Create a social media post about Cloudinary AI-driven image optimization for X.',
        },
      ],
    });

    // Get the generated content
    const generatedPost = response.choices[0].message.content;

    // Log the generated social media post to the console
    console.log('Generated Post: ', generatedPost);

    // Write the generated post to a file
    const filePath = './generated-x-post.txt';
    await fs.writeFile(filePath, generatedPost, 'utf8');
    console.log(`Generated X post saved to ${filePath}`);
  } catch (err) {
    console.error(
      'Error generating post:',
      err.response ? err.response.data : err.message
    );
  }
}

generatePost();
