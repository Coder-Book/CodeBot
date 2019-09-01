module.exports = {
  name: 'ping',
  category: 'info',
  discription: 'Returns latency and API latency',
  run: async (client, message, args) => {
    const msg = await message.channel.send('🏓 Pinging 🏓');

    msg.edit(
      `🏓 Pong 🏓\nLatency is ${Math.floor(
        msg.createdAt - message.createdAt
      )}ms\nAPI Latency ${Math.round(client.ping)}ms`
    );
  },
};
