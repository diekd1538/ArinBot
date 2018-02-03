const Discord = require('discord.js');
const client = new Discord.Client();

client.on('raedy', () => {
    console.log('I am ready!);
});

client.on('message', message => {
    if (message.content === 'ping) {
      message.reply('pong0;
      }
});

client.login(process.env.BOT_TOKEN)
