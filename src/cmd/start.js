const CONFIG   = require("../../config.json");
const ERRORS   = require("../lib/errors.js");
const discord  = require('discord.js');
const fs       = require('fs');

// eslint-disable-next-line no-unused-vars
const Client = require("../lib/client.js");

module.exports = {
    /**
     * @param {discord.Message} message 
     * @param {Client} bot
     * @param {Array<String>} args
     */
    run: (bot,message,args)=> {

        if(bot.loginingEnabled) return ERRORS.loginingAlreadyStarted(message);

        fs.appendFile("./log.txt", `[ ${new Date().toLocaleTimeString()} ] Логирование ${args[0] ? `с комментарием "${args[0]}"` : 'без комментариев'} было запущено ${message.author.tag} (ID: ${message.author.id})\n`, (err) => {
            console.log(err);
        });

        bot.loginingEnabled = true;

        return ERRORS.success(message, `Логирование ${args[0] ? `с комментарием "${args[0]}"` : 'без комментариев'} было запущено`);

    },
    name: ["start"],
    description: "Начать логирование входов выходов",
    show: true,
    ownerOnly: false,
    permissions: {
        bot: [],
        member: []
    },
    help: {
        category: "Прочее",
        arguments: "**<user || автор>** - Покажет аватар упомянутого пользователя, а если упоминания нет, то покажет аватар автора *(Можно ввести ID или имя)*",
        examples: `**${CONFIG.prefix}avatar** - Покажет твой аватар\n**${CONFIG.prefix}avatar @user** - Покажет аватар упомянутого пользователя\n**${CONFIG.prefix}avatar 111111123456789101** - Покажет аватар пользователя с таким ID\n**${CONFIG.prefix}avatar UserName** - Покажет аватар пользователя с таким именем *(НЕ НИКОМ НА СЕРВЕРЕ)*\n**${CONFIG.prefix}avatar server** - Покажет аватар сервера`
    }
}