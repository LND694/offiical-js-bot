const Discord = require('discord.js');
const fetch = require("node-fetch-commonjs");

module.exports = async (client, interaction, args) => {

    fetch(
        `https://some-random-api.com/img/panda`
    )
        .then((res) => res.json()).catch({})
        .then(async (json) => {
            client.embed({
                title: `🐼・Random Panda`,
                image: json.link,
                type: 'editreply',
                fotter: '© LND#0001'
            }, interaction)
        }).catch({})
}

 