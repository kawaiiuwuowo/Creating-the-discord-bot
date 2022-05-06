const discord = require('discord.js')
const client = new discord.Client()
const config = require('./config.json');


client.on("ready", () => {

    console.log("Bot online")
    client.user.setActivity("Type ':h' for help", {type: 'STREAMING' }).catch(console.error); 
  
  
  client.login("SUPER SECRET TOKEN! DONT SHARE WITH ANYONE")
