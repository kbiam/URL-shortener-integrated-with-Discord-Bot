import URL from './mongo.js';
import shortid from 'shortid';
import { Client, GatewayIntentBits } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent] });

client.on("messageCreate",function(message){
    if(message.author.bot) return;
    if(message.content.startsWith('create')){
        const shortId = shortid.generate();
        const url = message.content.split('create')[1];
        const newurl = URL.create({
            shortId: shortId,
            redirectURL: url,
            visitHistory: []
          });
        
        return message.reply({
            content: "Created short ID for "+url+'\n Short ID'+':'+shortId});
    }
    message.reply({
        content:"hello from bot"
    });
});
client.on("interactionCreate",function(interaction){
    console.log(interaction);
    interaction.reply("Pong");
});

client.login("TOKEN");