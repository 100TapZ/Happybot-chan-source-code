const DiscordMusicBot = require("./structures/DiscordMusicBot");
const client = new DiscordMusicBot();
const fetch = require('node-fetch');


setInterval(async () => {
  await fetch('replit live link here').then(console.log('Pinged!'))
}, 200000);

client.build();

module.exports = client; //;-;
