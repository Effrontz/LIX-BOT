const Discord = require('discord.js')

module.exports.run = async(client, message, args) => {

    message.delete()

    const helembed = new Discord.MessageEmbed()
    .setTitle('Toute les commande de LIX - BOT')
    .addField("`say`", "Faire parlez le bot")

}