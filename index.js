const { Client, Intents } = require("discord.js");
require("dotenv").config();
const client = new Client({
  intents: 0,
});
const discord_bot_token = process.env.DISCORD_BOT_TOKEN;

client.on("ready", () => {
  console.log("Done");
});

client.login(discord_bot_token);
