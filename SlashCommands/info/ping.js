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
        const msg = interaction.editReply(`🏓 Pinging...`)
       msg.delete(`🏓 Pinging...`)
         const embed = new MessageEmbed()
            .setTitle('Pong!')
            .setDescription(`WebSocket ping is ${client.ws.ping}MS\nMessage edit ping is ${Math.floor(msg.createdAt - await msg.createdAt)}MS!`)
            interaction.editReply({ embeds: [embed]});
           

    },
};