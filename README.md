### `README.md`

```markdown
# Cloudinary Social Media Post Generator - Fine-Tuned OpenAI Model

This project uses OpenAI's fine-tuned models to generate custom social media posts for platforms like X (formerly Twitter) and LinkedIn. The fine-tuned models are trained using examples of Cloudinary's social media posts, ensuring the generated posts match the desired tone and style.

## Prerequisites

- **Node.js** (version 18 or above)
- **OpenAI API Key**

## Setup

### Step 1: Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/musebe/Fine-tuning-OpenAI-models-.git
cd cloudinary-post-generator
```

### Step 2: Install Dependencies

Install the required dependencies, including the OpenAI Node.js library:

```bash
npm install openai
```

### Step 3: Set Up the Environment Variables

Create a `.env` file in the root directory and add your OpenAI API key:

```bash
touch .env
```

Add the following line to your `.env` file:

```env
OPENAI_API_KEY=your-openai-api-key
```

### Step 4: Ensure `type` is Set to `module`

In the `package.json` file, ensure the `"type"` field is set to `"module"` to support ES6 imports:

```json
{
  "name": "cloudinary-post-generator",
  "version": "1.0.0",
  "description": "Generates social media posts using OpenAI fine-tuned models",
  "main": "index.js",
  "type": "module",  // Ensures the project uses ES6 modules
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "openai": "^3.0.0"
  }
}
```

### Step 5: Upload the Training Data

Ensure you have a training data file in **JSONL** format, containing examples of Cloudinary's social media posts. Here's a sample of how the training data should look:

#### Sample `training-data.jsonl`

```jsonl
{"messages": [{"role": "system", "content": "You are generating social media posts for X. Keep the message under 280 characters, use a casual tone, break the post into paragraphs, and include no more than 2 hashtags."}, {"role": "user", "content": "Post about Cloudinary AI-driven image optimization."}, {"role": "assistant", "content": "Supercharge your images with Cloudinary's AI-driven optimization! 🚀\nAutomatically compress, crop, and enhance your images for better performance and faster load times.\n#AI #WebPerformance"}]}
{"messages": [{"role": "system", "content": "You are generating social media posts for LinkedIn. Keep the message professional, informative, and engaging."}, {"role": "user", "content": "Post about Cloudinary's new AI features."}, {"role": "assistant", "content": "Cloudinary's new AI-driven features can transform your image and video workflows, speeding up production time and optimizing for performance. Learn more about how to implement these solutions today."}]}
```

Upload the training data by running the following script:

```bash
node uploadTrainingFile.js
```

This will upload the training data to OpenAI and store the `fileId` for fine-tuning in `file-id.txt`.

### Step 6: Create a Fine-Tuning Job

Once the training data is uploaded, create a fine-tuning job using the file ID:

```bash
node createFineTune.js
```

This script will initiate a fine-tuning process with OpenAI. You can monitor its progress in the next step.

### Step 7: Check Fine-Tuning Job Status

You can check the status of your fine-tuning job to see whether it has completed:

```bash
node listFineTunes.js
```

This script lists all recent fine-tuning jobs and displays their status (`queued`, `running`, `succeeded`).

### Step 8: Generate a Social Media Post

Once your fine-tuning is completed, use the fine-tuned model to generate a custom social media post for X or LinkedIn. The generated posts will be saved to a file.

```bash
node createCompletion.js
```

This will generate a social media post based on the fine-tuned model and save it in `generated-x-post.txt` (for X posts) or another file, depending on the platform.

## File Structure

```plaintext
.
├── api.js                 # OpenAI API setup
├── uploadTrainingFile.js   # Script for uploading training data
├── createFineTune.js       # Script for creating a fine-tuning job
├── listFineTunes.js        # Script for checking fine-tuning job status
├── createCompletion.js     # Script for generating posts based on fine-tuned model
├── training-data.jsonl     # Example of training data in JSONL format
├── file-id.txt             # Stores the file ID from the upload
├── generated-x-post.txt    # Output file for generated X posts
├── .env                    # API key environment file
├── package.json            # Project dependencies and module type
└── README.md               # Project documentation
```

## Requirements

- Node.js v18 or higher is required for running this project due to the support for ES6 modules and the OpenAI API.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

