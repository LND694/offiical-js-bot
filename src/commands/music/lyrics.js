const genuis = require('genius-lyrics-api');

module.exports = async (client, interaction, args) => {
    let search = "";

        const player = client.player.players.get(interaction.guild.id);

        const channel = interaction.member.voice.channel;
        if (!channel) return client.errNormal({
            error: `You're not in a voice channel!`,
            type: 'editreply'
        }, interaction);

        if (player && (channel.id !== player?.voiceChannel)) return client.errNormal({
            error: `You're not in the same voice channel!`,
            type: 'editreply'
        }, interaction);

        if (!player || !player.queue.current) return client.errNormal({
            error: "There are no songs playing in this server",
            type: 'editreply'
        }, interaction);

        if (!interaction.options.getString('song')) {
            search = player.queue.current.title;
        }
        else {
            search = interaction.options.getString('song');
        }

        let lyricsSTR = "";
        search = search.split(" (")[0].split(" - ");//get array of artist and title
        try {
            const options = {
                apiKey: process.env.GENIUS_API,
                title: search[1],
                artist: search[0],
                optimizeQuery: true
            };
            
            await genuis.getLyrics(options).then((lyrics) => lyricsSTR = lyrics);
            
            if (!lyricsSTR) lyricsSTR = `No lyrics found for ${search} :x:`;
        } catch (error) {
            console.log(error);
            lyricsSTR = `No lyrics found for ${search} :x:`;
        }

        client.embed({
            title: `${client.emotes.normal.music}・Lyrics For ${search}`,
            desc: lyricsSTR,
            type: 'editreply',
            footer: '© LND#0001'
        }, interaction)
}

 