const { ChatOpenAI } = require('@langchain/openai');
const { SystemMessage, HumanMessage } = require('@langchain/core/messages');

const getAnswer = async (model, systemMessage, humanMessage) => {
  const chatModel = new ChatOpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    modelName: model,
    maxTokens: 1024,
    verbose: false,
    maxRetries: 2,
  });

  const { content } = await chatModel.invoke([
    new SystemMessage(systemMessage),
    new HumanMessage(humanMessage),
  ]);

  console.log('createChatCompletion content: ', content);
  return content;
};

module.exports = {
  getAnswer,
};
