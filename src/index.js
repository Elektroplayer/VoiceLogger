const discord = require('discord.js');
const Client  = require('./lib/Client.js');

const CONFIG = require('../config.json');

bot = new Client({
    ws: {
        intents: discord.Intents.ALL,
    },
    partials: [
        "MESSAGE",
        "CHANNEL",
        "GUILD_MEMBER",
        "USER",
    ],
}, {
    commandsDir: "cmd",
    listenersDir: "events",
});

bot.login(CONFIG.token)

bot.loadAll();