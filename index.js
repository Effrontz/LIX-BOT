console.log ("CODED BY Shadow.")

const { Client, Collection, DiscordAPIError, MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const config = require('./config.json');
const fs = require('fs')

const client = new Client();
client.commands = new Collection();

const token = config.token;         
const prefix = config.prefix;

fs.readdir("./Commandes/", (error, f) => {
    if(error) console.log(error);

    let commandes = f.filter(f => f.split(".").pop() === "js");
    if(commandes.length <= 0) return console.log("Aucune commande trouvée !");

    commandes.forEach((f) => {

        let commande = require(`./Commandes/${f}`);
        console.log(`${f} commande chargée !`);

        client.commands.set(commande.help.name, commande);
  });
});



fs.readdir("./Event/", (error, f) => {
    if(error) console.log(error);
    console.log(`${f.length} events en chargement`)

    f.forEach((f) => {
        const events = require(`./Event/${f}`);
        const event = f.split(".")[0];

        client.on(event, events.bind(null, client));
    });
});

client.login(token);
