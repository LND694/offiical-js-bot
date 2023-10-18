const Discord = require('discord.js');
const fetch = require("node-fetch-commonjs");

module.exports = async (client, interaction, args) => {

    fetch(
        `https://some-random-api.com/facts/panda`
    )
        .then((res) => res.json()).catch({})
        .then(async (json) => {
            client.embed({
                title: `💡・Random panda fact`,
                desc: json.fact,
                type: 'editreply',
                footer: '© LND#0001'
            }, interaction);
        }).catch({})
}

 