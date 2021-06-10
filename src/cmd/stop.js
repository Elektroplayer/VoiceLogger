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

        if(!bot.loginingEnabled) return ERRORS.loginingAlreadyStoped(message);

        fs.appendFile("./log.txt", `[ ${new Date().toLocaleTimeString()} ] Логирование было завершено ${message.author.tag} (ID: ${message.author.id})\n`, (err) => {
            console.log(err);
        });

        bot.loginingEnabled = false;

        return ERRORS.success(message, 'Логирование завершено!');

    },
    name: ["stop"],
    description: "Закончить логирование входов выходов",
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