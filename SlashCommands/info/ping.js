const { CommandInteraction, Client } = require('discord.js');
const { MessageEmbed } = require('discord.js')
const { Message } = require('discord.js')
const client = require('../../index');

module.exports = {
    name: 'ping',
    description: 'this is a ping command',

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     * @param {Message} message
     * @param {String[]} args 
     */
     run: async (client, interaction, args, message) => {
            interaction.editReply({ embeds: [your message]});
           

    
};