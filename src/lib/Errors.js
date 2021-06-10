const { MessageEmbed }  = require('discord.js');
const COLORS            = {
    "default": "525592",
    "errorRed": "cc0000",
    "warnOrange": "fdb21a",
    "successGreen": "00ce00"
};
const UTILS             = require('./Utils.js');

module.exports = {
    notArgs: (message,desc) => {
        let emb = new MessageEmbed().setColor(COLORS.errorRed).setTitle('Недостаточно аргументов!');
        if(desc) emb.setDescription(desc);
        message.channel.send(emb).then(msg=>msg.delete({timeout:5000}));
    },
    // falseArgs: (message,desc) => {
    //     let emb = new MessageEmbed().setColor(COLORS.errorRed).setTitle('Предоставлены неверные аргументы!');
    //     if(desc) emb.setDescription(desc);
    //     message.channel.send(emb).then(msg=>msg.delete({timeout:5000}));
    // },

    /**
     * Логирование уже запущено
     * @param {Message} message
     * @param {Array} permissions
    */
    loginingAlreadyStarted: (message) => {
        message.channel.send(
            new MessageEmbed().setColor(COLORS.errorRed)
            .setTitle('Логирование уже запущено!')
        ).then(msg=>msg.delete({timeout:5000}));
    },

    /**
     * У человека не достаточно прав
     * @param {Message} message
     * @param {Array} permissions
    */
    notPerms: (message, permissions) => {
        message.channel.send(
            new MessageEmbed().setColor(COLORS.errorRed)
            .setTitle(permissions || permissions.length != 0 ? `У тебя нет этих прав: ${ UTILS.stringifyPermissions(permissions) }` : "У тебя не достаточно прав!")
        ).then(msg=>msg.delete({timeout:5000}));
    },

    /**
     * У самого бота не достаточно прав
     * @param {Message} message
     * @param {Array} permissions
    */
    // botNotPerms: (message, permissions) => {
    //     message.channel.send(
    //         new MessageEmbed().setColor(COLORS.errorRed)
    //         .setTitle(permissions || permissions.length != 0 ? `У меня нет этих прав: ${ UTILS.stringifyPermissions(permissions) }` : "У меня не достаточно прав!")
    //     ).then(msg=>msg.delete({timeout:5000}));
    // },

    /**
     * Функция доступна только создателям
     * @param {Message} message
    */
    // ownerOnly: (message) => {
    //     message.channel.send(
    //         new MessageEmbed().setColor(COLORS.errorRed).setTitle('Эта функция доступна только создателям бота!')
    //     ).then(msg=>msg.delete({timeout:5000}));
    // },

    // noUser: (message)=> {
    //     let emb = new MessageEmbed().setColor(COLORS.errorRed).setTitle('Такого пользователя не существует!');
    //     message.channel.send(emb).then(msg=>msg.delete({timeout:5000}));
    // },
    // noChannel: (message)=> {
    //     let emb = new MessageEmbed().setColor(COLORS.errorRed).setTitle('Такого канала не существует!');
    //     message.channel.send(emb).then(msg=>msg.delete({timeout:5000}));
    // },
    // custom: (message,title,desc) => {
    //     let emb = new MessageEmbed().setColor(COLORS.errorRed).setTitle(title);
    //     if(desc) emb.setDescription(desc);
    //     message.channel.send(emb).then(msg=>msg.delete({timeout:5000}));
    // },
    success: (message,title,desc) => {
        let emb = new MessageEmbed().setColor(COLORS.successGreen).setTitle(title);
        if(desc) emb.setDescription(desc);
        message.channel.send(emb);
    },
    // APIErrors: (message) => {
    //     let emb = new MessageEmbed().setColor(COLORS.errorRed).setTitle('Неполадки с API! Попробуйте позже...');
    //     message.channel.send(emb);
    // },
    // baseErr: (message,value) => {
    //     let emb = new MessageEmbed().setColor(COLORS.errorRed).setTitle(value ? `Ошибка базы данных! Значение: ${value}` : `Ошибка базы данных!`)
    //     .setDescription(`Обновите конфигурацию! \`e.settings configurationUpdate\``);
    //     message.channel.send(emb).then(msg=>msg.delete({timeout:5000}));
    // },
    // doNotWorksNow: (message) => {
    //     let emb = new MessageEmbed().setColor(COLORS.errorRed).setTitle(`Эта функция не работает сейчас!`)
    //     .setDescription(`Следите за обновлениями) \`e.ver\`...`);
    //     message.channel.send(emb).then(msg=>msg.delete({timeout:5000}));
    // },
    unknown: (message,desc) => {
        let emb = new MessageEmbed().setColor(COLORS.errorRed).setTitle("Произошла неизвестная ошибка");
        if(desc) emb.setDescription(desc);
        message.channel.send(emb).then(msg=>msg.delete({timeout:5000}));
    }
}