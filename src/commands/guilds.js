const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');

module.exports.run = async (client, msg, args) => {

	let msgString = msg.content.split(' ');

	if (msg.author.bot) return;
	if (msgString[1]) return;

	const embed = new MessageEmbed()

		.setColor(0x7289DA)
		.setDescription(`Badge Info is in **${client.guilds.cache.size}** servers!`)

	msg.channel.send(embed);
}

module.exports.help = {
	name: "+guilds"
}