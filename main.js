const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => { 
  console.log(`${client.user.tag}が起動しました`);

  client.channels.cache.get(チャンネルID).send(起動完了);
   channel.setName('member' + guild.memberCount)


client.on('guildMemberAdd', (member, guild) => {
    const channel = member.guild.channels.cache.get(チャンネルID);
    if (!channel) return;
    channel.send(`${member.user}さんが参加しました`);
});

client.on('guildMemberAdd', member => {
   if (member.guild.id === 自分のサーバーID) {
     const channel = member.guild.channels.cache.get(チャンネルID)
     channel.setName('member' + member.guild.memberCount)
   }
 })


client.on('message', async message =>{

    if(message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(message.author.bot){
        return;
    }
    


if(command === "say"){
        const say_message = args.join(" ");
        message.delete().catch(msg=>{});
        message.channel.send(say_message);
    }

if(command === "addrole" && !message.member.roles.cache.has(付けたいロールのID)){
        message.member.roles.add(付けたいロールのID);
        message.reply('ロールを付与しました');
    }




});


client.login(TOKEN);
