const Schema = require("../../database/models/blacklist");

module.exports = async (client, interaction, args) => {
    Schema.findOne({ Guild: interaction.guild.id }, async (err, data) => {
        if (data && data.Words.length > 0) {
            client.embed({
                title: "🤬・Blacklisted words",
                desc: data.Words.join(", "),
                type: 'editreply',
                footer: '© LND#0001'
            }, interaction)
        }
        else {
            client.errNormal({
                error: `This guild has not data!`,
                type: 'editreply',
                footer: '© LND#0001'
            }, interaction);
        }
    })
}

 