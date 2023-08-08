
module.exports = async (client, interaction, args) => {
  const user = interaction.options.getUser('user') || interaction.user;

  client.embed({
    title: `🖼・User avatar`,
    image: user.displayAvatarURL({ dynamic: false, size: 1024 }),
    type: 'editreply',
    footer: '© LND#0001'
  }, interaction)
}

 