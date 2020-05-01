const Discord = require('discord.js');
 const client = new Discord.Client();
//logs in when it starts up
client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });
//every message from client

client.on('message', msg => {
    
 if(msg.content.toLowerCase() === 'spam')
 {
     for(var i=0;i < 10; i++){
        msg.channel.send('SPAM');
     }
 }
 else if(msg.author.bot) {
     return;
 }
 else if(msg.content.toLowerCase() === 'stop') {
     msg.reply('Why?');
 }
 else if (msg.content.toLowerCase() === 'no'){
     msg.reply('WHY?')
 }
 else if(msg.content.toLowerCase() === 'ok'){
     for(i=0; i <= 2; i++) {
         msg.reply('...');
     }
 }
 else {
     msg.reply('Good luck with that!');
 }
 
 });
//Client token from bot application page
client.login('NzA1ODUzNzIxNjQ4ODI0Mzgw.XqxwGQ.4t8XDOZODAEmGDQzp4qdFb6FdF8');