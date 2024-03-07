const Discord = require('discord.js');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const MODEL_NAME = "gemini-pro";
module.exports = async (client, interaction, args) => {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const prompt = interaction.options.getString('message');

    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const result  = await model.generateContent(prompt);

    const reply = result.response.text();

        // due to Discord limitations, we can only send 2000 characters at a time, so we need to split the message
    if (reply.length <= 2000) {
        client.embed({
            title: prompt,
            desc: reply,
            type: 'editreply'
        }, interaction);
    } else {
        const replyArray = reply.match(/[\s\S]{1,2000}/g);
        replyArray.forEach(async (msg) => {
            client.succNormal({
                text: msg,
                type: 'reply'
            }, interaction);
        });
    }

}