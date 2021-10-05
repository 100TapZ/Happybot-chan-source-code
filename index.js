const DiscordMusicBot = require("./structures/DiscordMusicBot");
const client = new DiscordMusicBot();
const fetch = require('node-fetch');


setInterval(async () => {
  await fetch('https://Happybot-chan.remoel-lowielow.repl.co').then(console.log('Pinged!'))
}, 200000);

client.build();

module.exports = client; //;-;
