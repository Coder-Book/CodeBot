const { RichEmbed } = require('discord.js');

module.exports = {
  name: 'server',
  category: 'info',
  discription: 'Gives information about the Server',
  run: async (client, message, args) => {
    if (message.deletable) message.delete();

    const roleColor =
      message.guild.me.displayHexColor === '#000000'
        ? '#ffffff'
        : message.guild.me.displayHexColor;

    const embed = new RichEmbed()
      .setColor(roleColor)
      .setDescription('Server Information')
      .setTimestamp()
      .setThumbnail(message.guild.iconURL)
      .addField('Server', message.guild.name)
      .addField('Owner', message.guild.owner)
      .addBlankField()
      .addField('Created', message.guild.createdAt.toDateString())
      .addField('Member Count', message.guild.memberCount)
      .addField('Icon', message.guild.iconURL);

    message.author.send(embed);
    message.channel.send('Check your DMs');
  },
};
