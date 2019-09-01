const { Client, Collection, RichEmbed } = require('discord.js');
const { config } = require('dotenv');

const client = new Client({
  disableEveryone: true,
});

config({
  path: require('path').join(__dirname, '.env'),
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
  client.user.setPresence({
    status: 'online',
    game: {
      name: 'myself get developed',
      type: 'WATCHING',
      url: 'https://github.com/coder-book/coderbot',
    },
  });
});

client.on('message', async message => {
  const prefix = '-';

  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;
  if (!message.member) message.member = message.guild.fetchMember(message);
  message.guild.createdAt.toDateString;
  const args = message.content.slice(prefix.length).split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd === 'ping') require('./commands/ping').run(client, message, args);
  else if (cmd === 'say') require('./commands/say').run(client, message, args);
  else if (cmd === 'server')
    require('./commands/server').run(client, message, args);
  else if (cmd === 'user')
    require('./commands/user').run(client, message, args);
});

client.login(process.env.TOKEN);
