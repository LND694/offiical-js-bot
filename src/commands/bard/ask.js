
const Discord = require('discord.js');
const { DiscussServiceClient } = require("@google-ai/generativelanguage");
const { GoogleAuth } = require("google-auth-library");

module.exports = async (client, interaction, args) => {

    var query = interaction.options.getString('text');
    const cli = new DiscussServiceClient({
        authClient: new GoogleAuth().fromAPIKey(process.env.BARD_API),
    });
    

    const result = await cli.generateMessage({
        model: 'models/chat-bison-001',
        prompt: {
            messages: [{ content: query }],
        },
        max_tokens: 1024,
    });

    
    console.log(result[0].candidates[0].content);
    return client.embed({
        title: "Bard:",
        desc: result[0].candidates[0].content,
        type: 'editreply',
        footer: '© LND#0001'
    }, interaction)
}

 