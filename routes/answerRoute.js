const { Router } = require('express');
const answer = Router();

const { getAnswer } = require('../controllers/answerController');

answer.post('/', async (req, res, next) => {
  try {
    const question = req.body.question;
    console.log({ question: question });

    const model = 'gpt-4-turbo';
    const systemMessage = `Alice here. I am a language model assistant. I am here to help you with any questions you have.`;
    const humanMessage = question;
    const answer = await getAnswer(model, systemMessage, humanMessage);

    return res.status(200).json({
      reply: answer,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: 'error', message: 'something went wrong' });
  }
});

module.exports = answer;
