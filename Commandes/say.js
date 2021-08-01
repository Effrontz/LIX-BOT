const Discord = require("discord.js");
 
module.exports.run = async (client, message, args) => {
     
 
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Stop, tu n'as pas la permission d'utiliser cette commande !");
    let botmessage = args.join(" ");
    message.delete().catch();
    message.channel.send(botmessage)
    console.log(`Message envoyé "${message.author.username}"`)
}
 
module.exports.help = {
    name: "say"
}