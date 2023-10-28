const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('chatgpt')
        .setDescription('play with chatgpt')
        .addSubcommand(subcommand =>
            subcommand
                .setName('ask')
                .setDescription('ask chatgpt')
                .addStringOption((option) => option.setName('text').setDescription('enter a text for chatgpt').setRequired(true))
        )
    ,

    /** 
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async (client, interaction, args) => {
        await interaction.deferReply({ fetchReply: true });
        client.loadSubcommands(client, interaction, args);
    },
};

 