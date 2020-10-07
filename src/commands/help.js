const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const botconfig = require('./../botconfig.json');
const prefix = botconfig.prefix;

module.exports.run = async (client, msg, args) => {

	let msgString = msg.content.split(' ');

	if (msgString[1]) return;
	if (msg.author.bot) return;

		const embed = new MessageEmbed()

			.setColor(botconfig.embedColor)
			.setTitle(`Badge Info's Command List`)
			.setThumbnail(client.user.avatarURL())
			.setDescription('`+help` ~ Displays all of the bot\'s commands\n`+badges` ~ Displays all of the neccessary information about discord badges\n`+badgeinfo` ~ Gives a list of all of the badges you/another member owns\n`+checklist` ~ Creates a list of all of the badges you own and all of the ones you don\'t\n`+invite` ~ Gives an invite link to invite Badge Info to a server')

		msg.channel.send(embed);
}

module.exports.help = {
	name: `${prefix}help`,
}
