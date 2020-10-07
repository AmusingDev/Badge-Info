const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const botconfig = require('./../botconfig.json');
const prefix = botconfig.prefix;

module.exports.run = async (client, msg, args) => {

	let msgString = msg.content.split(' ');

	if (msg.author.bot) return;
	if (msgString[1]) return;

	const embed = new MessageEmbed()

		.setColor(botconfig.embedColor)
		.setTitle('GitHub Bot Source')
		.setDescription('https://github.com/AmusingDev/Badge-Info')

	msg.channel.send(embed);
}

module.exports.help = {
	name: `${prefix}source`,
}
