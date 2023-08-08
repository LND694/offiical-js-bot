const Discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = async (client, interaction, args) => {

    fetch(
        `https://some-random-api.com/img/cat`
    )
        .then((res) => res.json()).catch({})
        .then(async (json) => {
            client.embed({
                title: `🐱・Random Cat`,
                image: json.link,
                type: 'editreply',
                footer: '© LND#0001'
            }, interaction)
        }).catch({})
}

 
