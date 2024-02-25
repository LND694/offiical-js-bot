const Discord = require('discord.js');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const MODEL_NAME = "gemini-pro";
module.exports = async (client, interaction, args) => {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const message = interaction.options.getString('message');

    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const generationConfig = {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    };

    const parts = [
      {
        text: `input: ${message}`,
      },
    ];

    const result = await model.generateContent({
      contents: [{ role: "user", parts }],
      generationConfig,
    });

    const reply = await result.response.text();
        // due to Discord limitations, we can only send 2000 characters at a time, so we need to split the message
    if (reply.length > 2000) {
        const replyArray = reply.match(/[\s\S]{1,2000}/g);
        replyArray.forEach(async (msg) => {
            client.succNormal({
                text: msg,
                type: 'reply'
            }, interaction);
        });
        return;
    }
    else{
        client.succNormal({
            text: reply,
            type: 'reply'
        }, interaction);
    }


}