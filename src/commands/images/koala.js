const Discord = require('discord.js');
const fetch = require("node-fetch-commonjs");

module.exports = async (client, interaction, args) => {

    fetch(
        `https://some-random-api.com/img/koala`
    )
        .then((res) => res.json()).catch({})
        .then(async (json) => {
            client.embed({
                title: `🐨・Random Koala`,
                image: json.link,
                type: 'editreply',
                footer: '© LND#0001'
            }, interaction)
        }).catch({})
}

 