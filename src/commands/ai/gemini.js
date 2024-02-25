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

    client.embed({ 
        title: `📢・Announcement!`, 
        desc: message 
    }, channel);

}