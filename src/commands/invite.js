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
		.setTitle('Invite Link')
		.setDescription('https://discord.com/oauth2/authorize?client_id=747880781212418189&permissions=3072&scope=bot')

	msg.channel.send(embed);
}

module.exports.help = {
	name: `${prefix}invite`,
}
