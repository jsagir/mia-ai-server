# Mia AI - Vercel Serverless Chatbot

A streaming chatbot API built with OpenAI's GPT-4 Turbo (4.1) model and deployed on Vercel's serverless platform.

## Features

- Streaming responses using Server-Sent Events (SSE)
- Edge runtime for faster response times
- CORS support for cross-origin requests
- Simple HTML test client included

## Setup Instructions

### Prerequisites

- Node.js 18 or higher
- Vercel CLI
- OpenAI API key

### Local Development

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/mia-ai-vercel.git
   cd mia-ai-vercel
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the project root with your OpenAI API key:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```
Ensure this `.env` file is not committed to version control; it is listed in `.gitignore`.

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000/test.html` to test the chatbot.

### Deployment to Vercel

1. Install Vercel CLI if you haven't already:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Add your OpenAI API key as a secret:
   ```bash
   vercel secrets add openai_api_key your_openai_api_key_here
   ```

4. Deploy to Vercel:
   ```bash
   npm run deploy
   ```

5. Follow the prompts to complete the deployment.

## API Usage

### Endpoint

`POST /api/chat`

### Request Format

```json
{
  "messages": [
    {"role": "system", "content": "You are Mia, a helpful AI assistant."},
    {"role": "user", "content": "Hello, who are you?"}
  ]
}
```

### Response

The API returns a stream of Server-Sent Events (SSE) with the following format:

```
data: {"content":"Hi"}

data: {"content":" there"}

data: {"content":"!"}

data: [DONE]
```

## Customization

- Update the system prompt in your client application to change Mia's personality
- Modify the model in `api/chat.js` to use a different OpenAI model
- Adjust CORS settings in `api/chat.js` for production use

## License

This project is licensed under the [MIT License](LICENSE).

