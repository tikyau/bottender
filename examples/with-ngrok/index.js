require('babel-register');

const { MessengerBot } = require('../../src');
const { createServer } = require('../../src/express');

const config = {
  accessToken: '__FILL_YOUR_TOKEN_HERE__',
  ngrok: true,
};

const bot = new MessengerBot({
  accessToken: config.accessToken,
});

bot.onEvent(context => {
  context.sendText('Hello World');
});

const server = createServer(bot, config);

server.listen(5000, () => {
  console.log('server is running on 5000 port...');
});
