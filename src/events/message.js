const CONFIG   = require('../../config.json');
const ERRORS   = require('../lib/Errors.js');
const discord  = require('discord.js');

function getCommand(bot, name) {
    for (const command of bot.commands)
        if (command.name.indexOf(name) !== -1) return command
    return false
}

module.exports = {
    name: "message",
    run: async function (bot, message) {
        if ( message.author.bot || !message.content.startsWith(CONFIG.prefix) || message.channel.type === "dm" ) return;

        let messageArray = message.content.split(/\s+/g),
            cmd          = messageArray[0].slice(CONFIG.prefix.length),
            args         = messageArray.slice(1)

        const command = getCommand(bot, cmd)
        if (!command) return
        
        if (!message.member.permissions.has(command.permissions.member)) return ERRORS.notPerms(message, command.permissions.member.filter(p => !message.member.permissions.has(p)));
        if (!message.guild.me.permissions.has(command.permissions.bot)) return ERRORS.botNotPerms(message, command.permissions.bot.filter(p =>message.guild.me.permissions.has(p)));
        if (command.ownerOnly && !CONFIG.owners.includes(message.author.id)) return ERRORS.ownerOnly(message);

        try { 
            command.run(bot, message, args) 
        } catch (e) {
            await message.channel.send(
                new discord.MessageEmbed()
                .setTitle("Ошибка!")
                .setDescription(`\`\`\`js\n${e}\n\`\`\``)
                .addField("Автор", `${message.author} (${message.author.id})`, false)
                .addField("Контент", `\`\`\`\n${message.content}\n\`\`\``, false)
                .addField("Сервер", `${message.guild.name} (${message.guild.id})`, false)
                .addField("Канал", `${message.channel.name} (${message.channel.id})`, false)
                .addField("Ошибка (1000 символов лимит)", `${e.stack.slice(0, 1000)}`, false)
            )

            console.log(e);
        }
    }
}