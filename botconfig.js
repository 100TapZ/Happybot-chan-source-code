module.exports = {
  Admins: ["UserID", "UserID"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "&", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/EwH4G8rZR7", //Support Server Link
  Token: process.env.Token || "BOT TOKEN here", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "Client ID here", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "Client Secret here", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": true, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Password", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "youshallnotpass", 
    secure: false, // Set this to true if you're self-hosting lavalink on replit.
  },


  //Don't edit it, i already filled it up
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "a4569ac1643947af9993a89d89565274", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "71e0d6649faa4aa6b9f3d203fa8d5904", //Spotify Client Secret
  },
};
