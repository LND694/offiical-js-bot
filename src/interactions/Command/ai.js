const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ai')
        .setDescription('Talk with gemini')
        .addSubcommand(subcommand =>
            subcommand
                .setName('gemini')
                .setDescription('talk with gemini')
                .addStringOption(option => option.setName('message').setDescription('Enter a prompt').setRequired(true))
        ),

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

 