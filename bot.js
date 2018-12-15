const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("523455607660085272")
setInterval(function() {
channel.send(`kontexx fdsf qjfsq fsfqd kontexx`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
