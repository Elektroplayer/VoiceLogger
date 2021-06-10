const CONFIG   = require('../../config.json');
const ERRORS   = require('../lib/Errors.js');
const discord  = require('discord.js');
const Client   = require('../lib/Client.js');
const fs       = require('fs');

module.exports = {
    name: "voiceStateUpdate",
    /**
     * 
     * @param {Client} bot 
     * @param {discord.VoiceState} oldState 
     * @param {discord.VoiceState} newState 
     */
    run: function (bot, oldState, newState) {
        if(!bot.loginingEnabled) return;

        let type = newState.channelID !== null //  Когда человек входит, значение будет true, когда выходит - false.
        
        let memberID = oldState.id; //  ID человека
        let username = oldState.guild.members.cache.get(memberID).user.tag //  Его тэг

        let channelID = newState.channelID || oldState.channelID; //  Ну хотя бы в одном из них он должен быть
        let channelname = oldState.guild.channels.cache.get(channelID).name;

        fs.appendFile("./log.txt", `[ ${new Date().toLocaleTimeString()} ] ${username} (ID: ${memberID}) ${type ? 'вошёл в канал' : 'вышел из канала'} "${channelname}" (ID: ${channelID})\n`, (err) => {
            console.log(err);
        });
    }
}