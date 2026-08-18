require('dotenv').config()  
const { Client, Events, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (m) => {
 if(m.author.bot) return
 m.reply({
    content:'Hi from Manan`s bot'
 })
});

client.on('interactionCreate', interaction=>{
    // console.log(interaction);
    interaction.reply('Pong')
    
})

client.login(process.env.DISCORD_TOKEN)

