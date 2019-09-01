const { RichEmbed } = require('discord.js');

module.exports = {
  name: 'user',
  category: 'info',
  discription: 'Gives information about a User',
  run: async (client, message, args) => {
    if (message.deletable) message.delete();

    const roleColor =
      message.guild.me.displayHexColor === '#000000'
        ? '#ffffff'
        : message.guild.me.displayHexColor;

    const embed = new RichEmbed()
      .setColor(roleColor)
      .setDescription('User Information')
      .setTimestamp()
      .setThumbnail(message.author.defaultAvatarURL)
      .addField('Username', message.author.username)
      .addField('ID', message.author.id)
      .addField('Icon', message.author.defaultAvatarURL)
      .addField('Created', message.author.createdAt);

    message.author.send(embed);
    message.channel.send('Check your DMs');
  },
};
