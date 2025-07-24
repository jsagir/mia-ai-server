module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Check environment variables
  const hasApiKey = !!process.env.CHATBASE_API_KEY;
  const hasChatbotId = !!process.env.CHATBOT_ID;

  res.status(200).json({
    status: 'ok',
    message: 'Chatbase Proto Bridge is running',
    timestamp: new Date().toISOString(),
    environment: {
      hasApiKey: hasApiKey,
      hasChatbotId: hasChatbotId,
      apiKeyLength: hasApiKey ? process.env.CHATBASE_API_KEY.length : 0,
      chatbotIdLength: hasChatbotId ? process.env.CHATBOT_ID.length : 0
    },
    endpoints: {
      chat: '/api/chat',
      health: '/api/health'
    }
  });
};