const {Client, GatewayIntentBits} = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const BOT_TOKEN = '4b6bbaaa8258a95e8cb54171cfa2045e9a95ed05f52d596d6742c5667fbcee60';

client.login(BOT_TOKEN);

client.once('ready', () => {
    console.log('Ready!');
});

client.on('messageCreate',(message) => {
    if (message.content === '!ping')
    {
        message.reply('Pong.');
    }
});