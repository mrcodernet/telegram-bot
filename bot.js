const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config(); // .env fayldan o‘qish uchun

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

bot.on('message', (msg) => {
    bot.sendMessage(msg.chat.id, 'Salom, bot ishga tushdi!');
});
