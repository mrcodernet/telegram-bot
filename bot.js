const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot('7319647197:AAFTGYxaH4G926LZZt02KNyvtdCm64ZkzYg', { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Salom! Sizning xabaringiz qabul qilindi.');
});
